import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white bg-opacity-90 shadow-md backdrop-blur-md rounded-md">
      <h1 className="text-3xl font-bold tracking-wide text-teal-800">Travel Explorer</h1>
      <div className="space-x-3">
        <Button text="Вийти" onClick={() => alert('Вийти')} variant="secondary" />
        <Button text="Налаштування" onClick={() => alert('Налаштування')} variant="secondary" />
        <Button text="Історія пошуків" onClick={() => alert('Історія пошуків')} variant="secondary" />
      </div>
    </header>
  );
};

export default Header;
