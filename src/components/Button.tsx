import React from 'react';
import { ButtonProps } from '@/components/interfaces/ButtonProps';

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, className }) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
