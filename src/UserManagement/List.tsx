import React from 'react';
import User from './User';
import players from './players.json';

<<<<<<< Updated upstream
const List = () => {
  return (
    <>
      <h1>List</h1>
      <ul>
        <li><User name="Anna" /></li>
        <li><User name="Marco" /></li>
        <li><User name="Vivi" /></li>
        <li><User name="Matteo" /></li>
      </ul>
    </>
  );
}

export default List;
=======
const List = () => (
  <>
    <h1>Alle Spieler</h1>
    <ul>
      {players.map(element => (
    <li>
      <User name={element.name}></User> 
    </li>
  ))}
    </ul>
  </>
);


export default List;
>>>>>>> Stashed changes
