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

export interface SetScorepadsAction {
  type: ScorepadActionType.Set,
  payload: Scorepad[],
}

export interface AddScorepadAction {
  type: ScorepadActionType.Add,
  payload: Scorepad,
}

export interface DeleteScorepadAction {
  type: ScorepadActionType.Delete,
  payload: string,
}

export type ScorepadAction = SetScorepadsAction | AddScorepadAction | DeleteScorepadAction;
