import React from 'react';
// import { Link } from 'react-router-dom';
import Button from './Button';

const dummyResults = [
  { id: 1, title: 'Подорож до Карпат', image: 'https://www.egretta.org/gallery/menu_photos/landscape.jpg', location: 'Україна', type: 'Гори', details: 'Захоплююча подорож до серця Карпат...' },
  { id: 2, title: 'Оздоровлення в Трускавці', image: 'https://www.egretta.org/gallery/menu_photos/landscape.jpg', location: 'Україна', type: 'Спа', details: 'Відпочинок та оздоровлення на курорті...' },
];

const Results: React.FC = () => {
  return (
    <div className="mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-teal-800">Результати пошуку</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dummyResults.map((result) => (
          <div key={result.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={result.image} alt={result.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal-700">{result.title}</h3>
              <p className="text-sm text-teal-600">{result.details}</p>
              <div className="mt-4 space-x-2">
                {/* <Link to={`/details/${result.id}`}>
                  
                </Link> */}
                <Button text="Детальніше" />
                <Button text="Забронювати" variant="primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-teal-800">Можливо вас зацікавить</h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dummyResults.slice(0, 2).map((interest) => (
            <div key={interest.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={interest.image} alt={interest.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="text-md font-semibold text-teal-700">{interest.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
