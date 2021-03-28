export enum TermActionType {
  Set,
  Add,
  Delete,
}

export interface Term {
  _id: string,
  value: string,
}

export interface SetTermsAction {
  type: TermActionType.Set,
  payload: Term[],
}

export interface AddTermAction {
  type: TermActionType.Add,
  payload: Term,
}

export interface DeleteTermAction {
  type: TermActionType.Delete,
  payload: string,
}

export type TermAction = SetTermsAction | AddTermAction | DeleteTermAction;
