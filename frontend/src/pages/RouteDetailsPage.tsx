import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosConfig';

type Route = {
  id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  details: string;
};

const RouteDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [route, setRoute] = useState<Route | null>(null);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await axiosInstance.get(`/route/${id}`);
        setRoute(response.data);
        await axiosInstance.post('/route/view', { userId: 'currentUserId', routeId: id });
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };
    
    fetchRoute();
  }, [id]);

  if (!route) return <div>Loading...</div>;

  return (
    <div className="route-details-page bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{route.title}</h1>
      <p className="mb-6">{route.description}</p>
      <div className="images mb-4">
        {route.images.map((img, index) => (
          <img key={index} src={img} alt={`Route ${index}`} className="rounded-lg mb-2 shadow-md" />
        ))}
      </div>
      <p className="location font-semibold">Location: {route.location}</p>
      <p className="details mt-4">{route.details}</p>
    </div>
  );
};

export default RouteDetailsPage;