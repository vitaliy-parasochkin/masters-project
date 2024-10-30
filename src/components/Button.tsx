import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyles = `font-semibold px-6 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow`;
  const variantStyles = variant === 'primary' 
    ? 'bg-teal-500 hover:bg-teal-600 text-white' 
    : 'bg-white bg-opacity-80 hover:bg-opacity-90 text-teal-700';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {text}
    </button>
  );
};

export default Button;
