// src/PlayersList.js
import React from 'react';
import Card from './Card';
import Players from './Players';

const Cards = () => {
  return (
    <div className="magicpattern flex flex-wrap justify-evenly bg-transparent bg-orange-400 w-full h-full p-5 rounded-lg">
      {Players.map((playerCard, index) => (
        <Card key={index} {...playerCard} />
      ))}
    </div>
  );
};

export default Cards;
