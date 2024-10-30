import React, { useState } from 'react';
import Button from './Button';

const SearchForm: React.FC = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
  });

  const handleSubmit = () => {
    alert(`Пошук за фільтрами: ${JSON.stringify(filters)}`);
  };

  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-teal-800">Форма пошуку</h2>
      <div className="mb-4">
        <label className="block text-teal-600 mb-2">Локація:</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none shadow-inner"
        />
      </div>
      <div className="mb-4">
        <label className="block text-teal-600 mb-2">Тип подорожі:</label>
        <input
          type="text"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none shadow-inner"
        />
      </div>
      <Button text="Пошук" onClick={handleSubmit} />
    </div>
  );
};

export default SearchForm;
