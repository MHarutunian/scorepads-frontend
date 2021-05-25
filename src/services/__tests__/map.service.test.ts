import {
  mapPlayers, mapTerms, mapScorepad, mapScorepads,
} from '../map.service';
import apiPlayers from '../../../mocks/apiPlayers';
import players from '../../../mocks/players';
import apiTerms from '../../../mocks/apiTerms';
import terms from '../../../mocks/terms';
import apiScorepad from '../../../mocks/apiScorepad';
import scorepad from '../../../mocks/scorepad';
import apiScorepads from '../../../mocks/apiScorepads';
import scorepads from '../../../mocks/scorepads';

describe('players mapper', () => {
  it('returns a mapped player object', async () => {
    const expectedResult = players;
    const unmappedPlayers = apiPlayers;
    const result = mapPlayers(unmappedPlayers);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('terms mapper', () => {
  it('returns a mapped terms object', async () => {
    const expectedResult = terms;
    const unmappedTerms = apiTerms;
    const result = mapTerms(unmappedTerms);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('scorepad mapper', () => {
  it('returns a mapped scorepad object', async () => {
    const expectedResult = scorepad;
    const unmappedScorepad = apiScorepad;
    const result = mapScorepad(unmappedScorepad);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('scorepads mapper', () => {
  it('returns a mapped scorepads object', async () => {
    const expectedResult = scorepads;
    const unmappedScorepads = apiScorepads;
    const result = mapScorepads(unmappedScorepads);

    expect(result).toStrictEqual(expectedResult);
  });
});
