import { setScorepads, deleteScorepad, addScorepad } from '../actions';
import reducer from '../reducer';
import { ScorepadAction } from '../types';
import scorepads from '../../../../mocks/scorepads';

describe('scorepad reducer', () => {
  describe('`setScorepads`', () => {
    it('sets the scorepads for an empty state', () => {
      expect(reducer([], setScorepads(scorepads))).toStrictEqual(scorepads);
    });

    it('replaces existing scorepads', () => {
      const existingScorepads = [{
        id: '4',
        game: 'Jank',
        players: [{
          id: '3',
          name: 'Marco',
          picture: '',
        },
        {
          id: '2',
          name: 'Anna',
          picture: '',
        }],
        date: '2021-02-07T16:22:55.000Z',
      }];
      expect(reducer(existingScorepads, setScorepads(scorepads))).toStrictEqual(scorepads);
    });
  });

  describe('`deleteScorepad`', () => {
    it('does nothing to an empty state', () => {
      expect(reducer([], deleteScorepad('anything'))).toStrictEqual([]);
    });

    it('deletes a scorepad from a list of existing scorepads', () => {
      const [firstScorepad, secondScorepad] = scorepads;
      const { id } = secondScorepad;
      const state = reducer(scorepads, deleteScorepad(id));

      expect(state).toContain(firstScorepad);
      expect(state).not.toContain(secondScorepad);
    });

    it('deletes nothing if scorepad does not exist in list of existing scorepads', () => {
      const existingScorepads = [{
        id: '4',
        game: 'Jank',
        players: [{
          id: '3',
          name: 'Marco',
          picture: '',
        },
        {
          id: '2',
          name: 'Anna',
          picture: '',
        }],
        date: '2021-02-07T16:22:55.000Z',
      }];
      expect(reducer(existingScorepads, deleteScorepad('42'))).toStrictEqual(existingScorepads);
    });
  });

  describe('`addScorepad`', () => {
    const [scorepad] = scorepads;
    it('adds a scorepad to an empty state', () => {
      expect(reducer([], addScorepad(scorepad))).toStrictEqual([scorepad]);
    });

    it('adds a scorepad to a list of existing scorepads', () => {
      const existingScorepads = [{
        id: '4',
        game: 'Jank',
        players: [{
          id: '3',
          name: 'Marco',
          picture: '',
        },
        {
          id: '2',
          name: 'Anna',
          picture: '',
        }],
        date: '2021-02-07T16:22:55.000Z',
      }];
      const state = reducer(existingScorepads, addScorepad(scorepad));

      expect(state).toContain(scorepad);
      expect(state).toStrictEqual(expect.arrayContaining(existingScorepads));
    });
  });

  describe('unknown action', () => {
    const action = {
      type: 'unknown',
      payload: 'unknown',
    } as unknown as ScorepadAction;

    it('returns empty state if state is empty', () => {
      expect(reducer([], action)).toStrictEqual([]);
    });

    it('returns existing scorepads if state contains scorepads', () => {
      expect(reducer(scorepads, action)).toStrictEqual(scorepads);
    });
  });
});
