export enum TermActionType {
  Set,
  Add,
  Delete,
}

export interface Term {
  _id: string,
  value: string,
}

export interface TermAction {
  type: TermActionType,
  payload: Term[] | Term | string,
}
