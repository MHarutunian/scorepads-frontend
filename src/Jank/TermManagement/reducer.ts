import { Term, Action, ActionType } from './types';

/**
 * State reducer for terms, handling an action that was dispatched.
 *
 * @param state the current state, containing the list of terms
 * @param action the dispatched action to handle
 * @returns the new state after the dispatched action was handled
 */
const reducer = (state: Term[], action: Action) => {
  switch (action.type) {
    case ActionType.Set:
      return action.payload as Term[];
    case ActionType.Add:
      return [...state, action.payload as Term];
    case ActionType.Delete:
      return state.filter(({ _id }) => _id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
