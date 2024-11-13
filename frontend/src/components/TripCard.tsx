import React from 'react';

interface TripProps {
  trip: {
    id: string;
    title: string;
    description: string;
    location: string;
    rating: number;
    images: string[];
  };
}

const TripCard: React.FC<TripProps> = ({ trip }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={trip.images[0]} alt={trip.title} className="h-40 w-full object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{trip.title}</h3>
      <p className="text-sm mt-1 text-gray-500">{trip.location}</p>
      <p className="mt-2">{trip.description}</p>
      <p className="font-semibold mt-2">Рейтинг: {trip.rating}</p>
    </div>
  );
};

export default TripCard;
