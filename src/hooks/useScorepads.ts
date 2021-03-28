import { useMemo } from 'react';
import { Scorepad } from '../Jank/Scorepads/types';
import useApi from './useApi';

export interface ApiPlayer {
  _id: string,
  name: string,
  picture: string,
}

export interface ApiScorepad {
  _id: string,
  game: string,
  players: ApiPlayer[],
  // eslint-disable-next-line camelcase
  created_at: string,
}

const useScorepads = (game: string): [Error | null, Scorepad[] | null] => {
  const [error, apiScorepads] = useApi<ApiScorepad[]>(`/scorepads/?game=${game}`);
  const scorepads = useMemo(() => {
    if (!apiScorepads) {
      return null;
    }
    return apiScorepads.map((scorepad: ApiScorepad) => ({
      // eslint-disable-next-line no-underscore-dangle
      id: scorepad._id,
      game: scorepad.game,
      players: scorepad.players.map((player: ApiPlayer) => ({
        // eslint-disable-next-line no-underscore-dangle
        id: player._id,
        name: player.name,
        picture: player.picture,
      })),
      date: scorepad.created_at,
    })).sort(
      (scorepadA, scorepadB) => {
        if (scorepadB.date === scorepadA.date) {
          return 0;
        }
        return scorepadB.date < scorepadA.date ? -1 : 1;
      },
    );
  }, [apiScorepads]);

  return [error, scorepads];
};

export default useScorepads;
