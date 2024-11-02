// nationalite
import argentine from './svgs/argentine.svg';
import portugal from './svgs/portugal.svg';
import france from './svgs/france.svg';
import brazil from './svgs/brazil.svg';
import senegal from './svgs/senegal.svg';
// ekip
import real from './svgs/teams/real-madrid.svg';
import al_nassr from './svgs/teams/al-nassr-saudi.svg';
import inter_miami from './svgs/teams/miami.svg';
import al_hilal from './svgs/teams/al-hilal.svg';
// jouers
import messi from './images/messi.png';
import ronaldo from './images/ronaldo.png';
import neymar from './images/neymar.png';
import mbappe from './images/mbappe.png';
import sadio from './images/sadio.png';
const Players = [
    
    {
      name: "Cristiano Ronaldo",
      team: al_nassr,
      nationality: portugal,
      jerseyNumber: 7,
      age: 38,
      imageUrl: ronaldo
    },
    {
      name: "Lionel Messi",
      team: inter_miami,
      nationality: argentine,
      jerseyNumber: 10,
      age: 36,
      imageUrl: messi
    },
    {
      name: "Kylian Mbappé",
      team: real,
      nationality: france,
      jerseyNumber: 7,
      age: 24,
      imageUrl: mbappe
    },
    {
      name: "Neymar Jr.",
      team: al_hilal,
      nationality: brazil,
      jerseyNumber: 10,
      age: 31,
      imageUrl:neymar
    },
    {
      name:"Sadio Mane",
      team: al_nassr,
      nationality: senegal,
      jerseyNumber: 10,
      age: 29,
      imageUrl: sadio
    }

  ];
  
  export default Players;
  