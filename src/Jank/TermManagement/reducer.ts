import { Term, TermAction, TermActionType } from './types';

/**
 * State reducer for terms, handling an action that was dispatched.
 *
 * @param state the current state, containing the list of terms
 * @param action the dispatched action to handle
 * @returns the new state after the dispatched action was handled
 */
const reducer = (state: Term[], action: TermAction) => {
  switch (action.type) {
    case TermActionType.Set:
      return action.payload;
    case TermActionType.Add:
      return [...state, action.payload];
    case TermActionType.Delete:
      return state.filter(({ _id }) => _id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
