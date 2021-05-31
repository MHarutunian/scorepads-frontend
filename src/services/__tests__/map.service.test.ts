import {
  mapPlayers, mapTerms, mapScorepad, mapScorepads,
} from '../map.service';

describe('players mapper', () => {
  it('returns a mapped player object', async () => {
    const expectedResult = [{
      id: '42',
      name: 'Matteo',
      picture: '',
    },
    {
      id: '12',
      name: 'Marco',
      picture: '',
    }];
    const unmappedPlayers = [
      {
        _id: '42',
        name: 'Matteo',
        picture: '',
      },
      {
        _id: '12',
        name: 'Marco',
        picture: '',
      },
    ];
    const result = mapPlayers(unmappedPlayers);

    expect(result).toStrictEqual(expectedResult);
  });

  it('returns an empty array when given an empty array', async () => {
    const expectedResult: any[] = [];
    const result = mapPlayers([]);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('terms mapper', () => {
  it('returns a mapped terms object', async () => {
    const expectedResult = [
      {
        _id: '13',
        value: 'First Term',
      },
      {
        _id: '37',
        value: 'Second Term',
      },
      {
        _id: '42',
        value: 'Third Term',
      },
    ];
    const unmappedTerms = [
      {
        _id: '13',
        value: 'First Term',
      },
      {
        _id: '37',
        value: 'Second Term',
      },
      {
        _id: '42',
        value: 'Third Term',
      },
    ];
    const result = mapTerms(unmappedTerms);

    expect(result).toStrictEqual(expectedResult);
  });

  it('returns an empty array when given an empty array', async () => {
    const expectedResult: any[] = [];
    const result = mapTerms([]);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('scorepad mapper', () => {
  it('returns a mapped scorepad object', async () => {
    const expectedResult = {
      id: '1',
      game: 'JanK',
      players: [{
        id: '1',
        name: 'Matteo',
        picture: '',
      }],
      date: '2020-04-30T18:07:55.000Z',
    };
    const unmappedScorepad = {
      _id: '1',
      game: 'JanK',
      players: [{
        _id: '1',
        name: 'Matteo',
        picture: '',
      }],
      created_at: '2020-04-30T18:07:55.000Z',
    };
    const result = mapScorepad(unmappedScorepad);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('scorepads mapper', () => {
  it('returns a mapped scorepads object', async () => {
    const expectedResult = [
      {
        id: '2',
        game: 'Jank',
        players: [{
          id: '1',
          name: 'Matteo',
          picture: '',
        },
        {
          id: '3',
          name: 'Marco',
          picture: '',
        }],
        date: '2021-02-09T16:22:55.000Z',
      },
      {
        id: '1',
        game: 'Jank',
        players: [{
          id: '1',
          name: 'Matteo',
          picture: '',
        },
        {
          id: '2',
          name: 'Anna',
          picture: '',
        }],
        date: '2021-02-07T16:22:55.000Z',
      },
    ];
    const unmappedScorepads = [
      {
        _id: '1',
        game: 'Jank',
        players: [{
          _id: '1',
          name: 'Matteo',
          picture: '',
        },
        {
          _id: '2',
          name: 'Anna',
          picture: '',
        }],
        created_at: '2021-02-07T16:22:55.000Z',
      },
      {
        _id: '2',
        game: 'Jank',
        players: [{
          _id: '1',
          name: 'Matteo',
          picture: '',
        },
        {
          _id: '3',
          name: 'Marco',
          picture: '',
        }],
        created_at: '2021-02-09T16:22:55.000Z',
      },
    ];
    const result = mapScorepads(unmappedScorepads);

    expect(result).toStrictEqual(expectedResult);
  });

  it('returns an empty array when given an empty array', async () => {
    const expectedResult: any[] = [];
    const result = mapScorepads([]);

    expect(result).toStrictEqual(expectedResult);
  });
});
