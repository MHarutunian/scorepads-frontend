import React from 'react';
import User from './User';
import useApi from '../hooks/useApi';

type Player = {
  _id: string,
  name: string,
  picture: string | null
}

const List = () => {
  const [error, players] = useApi<Player[]>('/players');

  if (error) {
    return <span>Spieler konnten leider nicht geladen werden</span>;
  }

  return (
    <>
      <h1>List</h1>
      <ul>
        {players && players.map(({ _id, name }) => (
          <li key={_id}>
            <User name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};


export default List;
