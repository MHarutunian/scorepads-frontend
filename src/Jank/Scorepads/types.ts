export interface Player {
  id: string,
  name: string,
  picture: string,
}

export interface Scorepad {
  id: string,
  game: string,
  players: Player[],
  date: string,
}

export enum ScorepadActionType {
  Set,
  Add,
  Delete,
}

export interface ScorepadAction {
  type: ScorepadActionType,
  payload: Scorepad[] | Scorepad | string,
}
