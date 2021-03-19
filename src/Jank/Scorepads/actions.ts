import { Scorepad, ScorepadActionType } from './types';

/**
 * Creates and returns an action to set the list of available scorepads.
 *
 * @param scorepads the scorepads to set
 * @returns the action that can be dispatched to set scorepads
 */
export const setScorepads = (scorepads: Scorepad[]) => ({
  type: ScorepadActionType.Set,
  payload: scorepads,
});

/**
 * Creates and returns an action to add a scorepad.
 *
 * @param scorepad the scorepad to add
 * @returns the action that can be dispatched to add a scorepad
 */
export const addScorepad = (scorepad: Scorepad) => ({
  type: ScorepadActionType.Add,
  payload: scorepad,
});

/**
 * Creates and returns an action to delete a scorepad.
 *
 * @param id the ID of the scorepad to delete
 * @returns the action that can be dispatched to delete a scorepad
 */
export const deleteScorepad = (id: string) => ({
  type: ScorepadActionType.Delete,
  payload: id,
});
