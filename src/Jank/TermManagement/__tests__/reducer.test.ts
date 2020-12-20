import { setTerms, addTerm, deleteTerm } from '../actions';
import reducer from '../reducer';
import { TermAction } from '../types';
import terms from '../../../../mocks/terms';

describe('term reducer', () => {
  describe('`setTerms`', () => {
    it('sets the terms for an empty state', () => {
      expect(reducer([], setTerms(terms))).toStrictEqual(terms);
    });

    it('replaces existing terms', () => {
      const existingTerms = [{
        _id: '5',
        value: 'Exists',
      }, {
        _id: '25',
        value: 'Also exists',
      }];
      expect(reducer(existingTerms, setTerms(terms))).toStrictEqual(terms);
    });
  });

  describe('`addTerm`', () => {
    const [term] = terms;
    it('adds a term to an empty state', () => {
      expect(reducer([], addTerm(term))).toStrictEqual([term]);
    });

    it('adds a term to a list of existing terms', () => {
      const existingTerms = [{
        _id: '5',
        value: 'Exists',
      }, {
        _id: '25',
        value: 'Also exists',
      }];
      const state = reducer(existingTerms, addTerm(term));

      expect(state).toContain(term);
      expect(state).toStrictEqual(expect.arrayContaining(existingTerms));
    });
  });

  describe('`deleteTerm`', () => {
    it('does nothing to an empty state', () => {
      expect(reducer([], deleteTerm('anything'))).toStrictEqual([]);
    });

    it('deletes a term from a list of existing terms', () => {
      const [firstTerm, secondTerm, thirdTerm] = terms;
      const { _id: id } = secondTerm;
      const state = reducer(terms, deleteTerm(id));

      expect(state).toContain(firstTerm);
      expect(state).not.toContain(secondTerm);
      expect(state).toContain(thirdTerm);
    });

    it('deletes nothing if term does not exist in list of existing terms', () => {
      const existingTerms = [{
        _id: '5',
        value: 'Exists',
      }, {
        _id: '25',
        value: 'Also exists',
      }];
      expect(reducer(existingTerms, deleteTerm('42'))).toStrictEqual(existingTerms);
    });
  });

  describe('unknown action', () => {
    const action = {
      type: 'unknown',
      payload: 'unknown',
    } as unknown as TermAction;

    it('returns empty state if state is empty', () => {
      expect(reducer([], action)).toStrictEqual([]);
    });

    it('returns existing terms if state contains terms', () => {
      expect(reducer(terms, action)).toStrictEqual(terms);
    });
  });
});
