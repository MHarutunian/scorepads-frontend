export enum ActionType {
  Set,
  Add,
  Delete,
}

export interface Term {
  _id: string,
  value: string,
}

export interface Action {
  type: ActionType,
  payload: Term[] | Term | string,
}
