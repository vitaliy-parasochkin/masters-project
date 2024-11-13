import React, { useState } from 'react';
import axios from 'axios';
import TripCard from './TripCard';

const SearchPage: React.FC = () => {
  const [filters, setFilters] = useState({ type: [], rating: '', location: '' });
  const [results, setResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/trips/search', filters);
      setResults(response.data);
      
      const recResponse = await axios.get(`http://localhost:5000/api/trips/recommend/USER_ID`);
      setRecommendations(recResponse.data);
    } catch (error) {
      console.error('Error fetching trips', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Пошук туристичних маршрутів</h1>
      
      <div className="flex flex-col space-y-4">
        <select multiple onChange={e => setFilters({ ...filters, type: Array.from(e.target.selectedOptions, option => option.value) })} className="p-2 border rounded">
          <option value="річка">Річка</option>
          <option value="природа">Природа</option>
          <option value="екстрим">Екстрим</option>
        </select>
        
        <input type="number" placeholder="Рейтинг від 1 до 5" max={5} className="p-2 border rounded" 
               onChange={e => setFilters({ ...filters, rating: e.target.value })} />
        
        <input type="text" placeholder="Локація" className="p-2 border rounded" 
               onChange={e => setFilters({ ...filters, location: e.target.value })} />
        
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Знайти</button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Результати пошуку</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map(trip => <TripCard key={trip.id} trip={trip} />)}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Можливо вас зацікавить</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map(trip => <TripCard key={trip.id} trip={trip} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
