import { Scorepad, ScorepadAction, ScorepadActionType } from './types';

/**
 * State reducer for scorepads, handling an action that was dispatched.
 *
 * @param state the current state, containing the list of scorepads
 * @param action the dispatched action to handle
 * @returns the new state after the dispatched action was handled
 */
const reducer = (state: Scorepad[], action: ScorepadAction) => {
  switch (action.type) {
    case ScorepadActionType.Set:
      return action.payload;
    case ScorepadActionType.Add:
      return [...state, action.payload];
    case ScorepadActionType.Delete:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
