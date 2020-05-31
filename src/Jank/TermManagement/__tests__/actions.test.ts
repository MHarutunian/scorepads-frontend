import { setTerms, addTerm, deleteTerm } from '../actions';
import { ActionType } from '../types';
import terms from '../../../../mocks/terms';

describe('term actions', () => {
  describe('setTerms', () => {
    it('has type `Set`', () => {
      expect(setTerms(terms)).toHaveProperty('type', ActionType.Set);
    });

    it('has provided terms as its payload', () => {
      expect(setTerms(terms)).toHaveProperty('payload', terms);
    });
  });

  describe('addTerm', () => {
    const [term] = terms;

    it('has type `Add`', () => {
      expect(addTerm(term)).toHaveProperty('type', ActionType.Add);
    });

    it('has provided term as its payload', () => {
      expect(addTerm(term)).toHaveProperty('payload', term);
    });
  });

  describe('deleteTerm', () => {
    const { _id: id } = terms[0];

    it('has type `Delete`', () => {
      expect(deleteTerm(id)).toHaveProperty('type', ActionType.Delete);
    });

    it('has provided ID as its payload', () => {
      expect(deleteTerm(id)).toHaveProperty('payload', id);
    });
  });
});
