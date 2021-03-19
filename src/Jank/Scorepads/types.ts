export interface Player {
  _id: string,
  name: string,
  picture: string,
}

export interface Scorepad {
  _id: string,
  game: string,
  players: Player[],
  createdAt: string,
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
