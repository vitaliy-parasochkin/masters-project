import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge("w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 active:bg-blue-600 transition-colors duration-200 shadow-md", className)} 
      {...props}
      >
      {children}
    </button>
  );
};

export default Button;
