import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-black px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-red-500">
                404
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 break-words ">
                Page Not Found
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-md break-words">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-gray-950 to-red-500 text-white rounded-lg hover:scale-105 transform transition duration-300"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
