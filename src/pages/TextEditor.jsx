import React from 'react'
import { SiTestinglibrary } from 'react-icons/si'

const TextEditor = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className=' flex flex-col items-center justify-center'>
                <h1 className="text-3xl font-bold text-red-500 underline flex gap-2">
                    Hello world!
                    <SiTestinglibrary />
                </h1>
                <h1>Hello</h1>
                <h2>Hello</h2>
                <h3>Hello</h3>
                <h4>Hello</h4>
                <h5>Hello</h5>
                <h6>Hello</h6>
                <p className="">
                    This is some text with tight line spacing.<br />
                    Notice how close the lines are.
                </p>
                <a href="#">hello world</a>
            </div>
        </div>
    )
}

export default TextEditor