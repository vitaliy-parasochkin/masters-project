import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white bg-opacity-90 shadow-md backdrop-blur-md rounded-md">
      <h1 className="text-3xl font-bold tracking-wide text-teal-800">Travel Explorer</h1>
      <div className="space-x-3">
        <Button  onClick={() => alert('Вийти')} className='w-auto' >Вийти</Button>
        <Button onClick={() => alert('Налаштування')} className='w-auto' >Налаштування</Button>
        <Button onClick={() => alert('Історія пошуків')} className='w-auto'  >Історія пошуків</Button>
      </div>
    </header>
  );
};

export default Header;
