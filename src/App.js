// src/App.js
import React from 'react';
import Cards from './Cards';

function App() {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8 bg-yellow-400 p-3 rounded-lg">FIFA Player Cards</h1>
      <Cards />
    </div>
  );
}

export default App;
