import React from 'react';

const VARIANTS = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 cursor-pointer',
    danger: 'bg-red-600 hover:bg-red-700 text-white cursor-pointer',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer',
};

const Button = ({
    children,
    variant = 'primary',
    className = '',
    disabled = false,
    type = 'button',    
    ...props
}) => {
    const baseClasses = 'px-4 py-2 text-sm rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1';
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${baseClasses} ${VARIANTS[variant]} ${disabledClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
