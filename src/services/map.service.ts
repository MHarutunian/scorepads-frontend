import { Term } from '../Jank/TermManagement/types';

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

export function mapScorepad(apiScorepad: ApiScorepad) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: apiScorepad._id,
    game: apiScorepad.game,
    players: mapPlayers(apiScorepad.players),
    date: apiScorepad.created_at,
  };
}

export function mapScorepads(apiScorepads: ApiScorepad[]) {
  return apiScorepads.map(mapScorepad).sort(
    (scorepadA, scorepadB) => {
      if (scorepadB.date === scorepadA.date) {
        return 0;
      }
      return scorepadB.date < scorepadA.date ? -1 : 1;
    },
  );
}

// TODO implement Term mapper
export function mapTerms(apiTerms: Term[]) {
  return apiTerms;
}

export function mapPlayers(apiPlayers: ApiPlayer[]) {
  return apiPlayers.map((player: ApiPlayer) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: player._id,
    name: player.name,
    picture: player.picture,
  }));
}
