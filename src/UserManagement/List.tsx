import User from './User';
import useApi from '../hooks/useApi';
import { ApiPlayer, mapPlayers } from '../services/map.service';
import { Player } from '../Jank/Scorepads/types';

const List = () => {
  const [error, players] = useApi<ApiPlayer[], Player[]>('/players', mapPlayers);

  if (error) {
    return <span>Spieler konnten leider nicht geladen werden</span>;
  }

  return (
    <>
      <h1>List</h1>
      <ul>
        {players && players.map(({ id, name }) => (
          <li key={id}>
            <User name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
