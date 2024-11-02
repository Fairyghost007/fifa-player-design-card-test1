import React from 'react';
import './Card.css'; // For additional custom styling

const Card = ({ name, team, nationality, jerseyNumber, imageUrl, stats, age }) => {
  return (
    <div className="fifa-card text-white border-4 relative m-2 rounded-2xl bg-yellow-400">
      {/* Card Header */}
        <div className="flex flex-col gap-1 items-center absolute    lg:mt-24 md:mt-20  mt-12 ml-10 lg:ml-6 md:ml-8 sm:ml-4">
          <h3 className="text-yellow-400 lg:text-3xl md:text-2xl sm:text-xl font-bold">{jerseyNumber}</h3>
          <span className="lg:text-xl md:text-lg sm:text-sm text-yellow-400 font-bold">{age}</span>
          <img src={team} alt={`${name} team logo`} className="w-4 h-4 lg:w-10 md:w-5 sm:w-3 lg:h-10 md:h-5 sm:h-3  " />
          <img src={nationality} alt={`${name} nationality`} className=" w-4 h-4 lg:w-10 md:w-5 sm:w-3 lg:h-10 md:h-5 sm:h-3  " />
        </div>

      <div>
      <img className="w-24 h-32 object-cover mx-auto lg:mt-28 md:mt-20  sm:mt-2 rounded-lg" src={imageUrl} alt={name} />


        <h2 className="text-center lg:font-bold md:font-semibold sm:font-medium lg:text-lg md:text-sm sm:text-xs   mt-2">{name.toUpperCase()}</h2>

        <div className="flex justify-center text-yellow-300 font-semibold mt-4 px-4">
          <div className="text-center p-6 xxx">
            <p>{stats.pace} PAC</p>
            <p>{stats.shooting} SHO</p>
            <p>{stats.passing} PAS</p>
          </div>
          <div className="text-center p-6">
            <p>{stats.dribbling} DRI</p>
            <p>{stats.defending} DEF</p>
            <p>{stats.physical} PHY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  name: "Unknown Player",
  team: "https://via.placeholder.com/40",
  nationality: "/images/argentina.png",
  jerseyNumber: 99,
  imageUrl: "https://via.placeholder.com/150",
  age: 99,
  stats: {
    pace: 98,
    shooting: 99,
    passing: 92,
    dribbling: 98,
    defending: 50,
    physical: 94,
  },
};

export default Card;
