import { setScorepads, addScorepad, deleteScorepad } from '../actions';
import { ScorepadActionType } from '../types';
import scorepads from '../../../../mocks/scorepads';

describe('scorepad actions', () => {
  describe('setScorepads', () => {
    it('has type `Set`', () => {
      expect(setScorepads(scorepads)).toHaveProperty('type', ScorepadActionType.Set);
    });

    it('has provided scorepads as its payload', () => {
      expect(setScorepads(scorepads)).toHaveProperty('payload', scorepads);
    });
  });

  describe('addScorepad', () => {
    const [scorepad] = scorepads;

    it('has type `Add`', () => {
      expect(addScorepad(scorepad)).toHaveProperty('type', ScorepadActionType.Add);
    });

    it('has provided scorepad as its payload', () => {
      expect(addScorepad(scorepad)).toHaveProperty('payload', scorepad);
    });
  });

  describe('deleteScorepad', () => {
    const { id } = scorepads[0];

    it('has type `Delete`', () => {
      expect(deleteScorepad(id)).toHaveProperty('type', ScorepadActionType.Delete);
    });

    it('has provided ID as its payload', () => {
      expect(deleteScorepad(id)).toHaveProperty('payload', id);
    });
  });
});
