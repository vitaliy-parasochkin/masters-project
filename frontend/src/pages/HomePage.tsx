import React from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Results from '../components/Results';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-200 to-indigo-300 text-gray-900">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <SearchForm />
        <Results />
      </main>
    </div>
  );
};

export default HomePage;