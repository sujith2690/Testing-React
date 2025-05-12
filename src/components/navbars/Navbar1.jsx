import React, { useState } from 'react'
import { SiTestinglibrary } from 'react-icons/si';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar1 = () => {
    const userId = '123456'
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const navigation = [
        { name: 'Home', href: 'home', path: '/home' },
        { name: 'Nav', href: 'nav', path: '/nav' },
        { name: 'Packages', href: 'packages', path: '/home' },
        { name: 'Contact', href: 'contact', path: '/home' },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <header className={`p-4 fixed sm:px-10  w-full top-0 z-50 transition-all duration-300 backdrop-blur-lg text-black`}>
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <RouterLink to="/home" className="cursor-pointer no-underline text-black">
                    <h1 className='flex gap-1 md:gap-2'>
                        <SiTestinglibrary className="transform scale-x-[-1] text-yellow-400" />
                        React Testing
                    </h1>
                </RouterLink>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-2 text-md font-medium list-none">
                    {navigation.map((item) => {
                        const isActive = path === item.path;
                        return (
                            <li key={item.name}>
                                <RouterLink
                                    to={item.path}
                                    className={classNames(
                                        "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300",
                                        // Default text color is black
                                        "text-black",
                                        // Apply blue text color if active or on hover
                                        isActive
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "hover:text-blue-600"
                                    )}
                                >
                                    {item.name}
                                </RouterLink>
                            </li>
                        );
                    })}
                    {userId ? (
                        <li>
                            <RouterLink to="/profile" className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:text-blue-600`}>
                                Profile
                            </RouterLink>
                        </li>
                    ) : (
                        <li>
                            <RouterLink to="/login" className={`flex items-center gap-1 cursor-pointer text-white`}>
                                <button className='px-2 py-1 bg-yellow-400 rounded-md text-white hover:bg-yellow-500 transition-colors duration-300'>
                                    Login
                                </button>
                            </RouterLink>
                        </li>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <HiOutlineX className="w-8 h-8" />
                        ) : (
                            <HiOutlineMenuAlt3 className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium list-none">
                        {navigation.map((item) => {
                            const isActive = path === item.path;
                            return (
                                <li key={item.name}>
                                    <RouterLink
                                        to={item.path}
                                        className={classNames(
                                            "cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300",
                                            "text-black", // Default black text
                                            isActive
                                                ? "text-blue-600 border-b-2 border-blue-600"
                                                : "hover:text-blue-600"
                                        )}
                                    >
                                        {item.name}
                                    </RouterLink>
                                </li>
                            );
                        })}
                        <RouterLink to="/profile" className="flex items-center gap-1 text-sm cursor-pointer" onClick={toggleMenu}>
                            Profile
                        </RouterLink>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar1;
