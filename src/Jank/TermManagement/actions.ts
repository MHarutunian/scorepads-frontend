import { Term, TermActionType } from './types';

/**
 * Creates and returns an action to set the list of available terms.
 *
 * @param terms the terms to set
 * @returns the action that can be dispatched to set terms
 */
export const setTerms = (terms: Term[]) => ({
  type: TermActionType.Set,
  payload: terms,
});

/**
 * Creates and returns an action to add a term.
 *
 * @param term the term to add
 * @returns the action that can be dispatched to add a term
 */
export const addTerm = (term: Term) => ({
  type: TermActionType.Add,
  payload: term,
});

/**
 * Creates and returns an action to delete a term.
 *
 * @param id the ID of the term to delete
 * @returns the action that can be dispatched to delete a term
 */
export const deleteTerm = (id: string) => ({
  type: TermActionType.Delete,
  payload: id,
});
