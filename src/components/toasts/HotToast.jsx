import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { toast, Toaster, ToastBar } from 'react-hot-toast';
import Button from '../ui/Button'

const HotToast = () => {
    const saveSetting = async () => {
        return toast.promise(
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Settings Resolved")
                }, 3000);
            }),
            {
                loading: 'Saving...',
                success: 'Settings Saved!',
                error: 'Could not save',
            }
        )

    }
    return (
        <div>
            <Toaster position='bottom-right' />
            <div className=' px-5 flex flex-col gap-2'>
                <div className='space-y-2'>
                    <p>Simple Toast</p>
                    <div className='flex gap-2'>
                        <Button variant="primary" onClick={() => toast.success("Hello world")} >testME</Button>
                        <Button variant="danger" onClick={() => toast.error("This is an error toast")} >Error</Button>
                        <Button variant="primary" onClick={() => saveSetting()} >Promise</Button>
                        <Button
                            variant="primary"
                            onClick={() =>
                                toast.custom((t) => (
                                    <div className="max-w-sm w-full bg-white shadow-md rounded-md flex items-center p-4 gap-4 border-l-4 border-green-500">
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-green-800">Success</p>
                                            <p className="text-sm text-gray-600">Hello world</p>
                                        </div>
                                        <button
                                            onClick={() => toast.remove(t.id)}
                                            className="text-gray-500 hover:text-black text-lg"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))
                            }
                        >
                            testME
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Hello Darkness", {
                                    icon: '😁',
                                    style: {
                                        borderRadius: '10px',
                                        background: '#333',
                                        color: '#fff'
                                    }
                                })
                            }
                        >
                            Dark Mode
                        </Button>
                        <Button
                            onClick={() =>
                                toast.custom((t) => (
                                    <div
                                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                                    >
                                        <div className="flex-1 w-0 p-2">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 pt-0.5">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3 flex-1">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        Emilia Gates
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Sure! 8:30pm works great!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex border-l border-gray-200">
                                            <button
                                                onClick={() => toast.remove(t.id)}
                                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        >
                            Tailwind Css
                        </Button>
                        <Button
                            onClick={() =>
                                toast.custom((t) => (
                                    <div
                                        className={`max-w-sm w-full bg-white shadow-md rounded-md flex items-center p-2 gap-4 border-l-4 border-blue-500`}
                                    >
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="User"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-gray-800">John Doe</p>
                                            <p className="text-sm text-gray-600">Just sent you a message!</p>
                                        </div>
                                        <button
                                            onClick={() => toast.remove(t.id)}
                                            className="cursor-pointer text-white hover:text-black"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))
                            }
                        >
                            Tailwind Css
                        </Button>

                       



                    </div>
                    <div>
                        <div
                            className={`max-w-sm w-full  shadow-md rounded-md flex items-center p-1 gap-4 border-l-4 border-blue-500`}
                        >
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="User"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-800">John Doe</p>
                                <p className="text-sm text-gray-600">Just sent you a message!</p>
                            </div>
                            <button

                                className="cursor-pointer text-white hover:text-black"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default HotToast