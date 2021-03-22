import { renderHook } from '@testing-library/react-hooks';
import useApi from '../useApi';
import useScorepads from '../useScorepads';

jest.mock('../useApi.ts');

describe('useScorepads', () => {
  it('calls the api with the correct path', () => {
    (useApi as jest.Mock).mockReturnValue([null, []]);

    renderHook(() => useScorepads('JanK'));
    expect(useApi).toHaveBeenCalledWith('/scorepads/?game=JanK');
  });

  it('returns null when given null as input', () => {
    (useApi as jest.Mock).mockReturnValue([null, null]);

    const { result } = renderHook(() => useScorepads('JanK'));
    const [error, apiResult] = result.current;

    expect(error).toBeNull();
    expect(apiResult).toBeNull();
  });

  it('returns an empty array when given an empty array as input', () => {
    (useApi as jest.Mock).mockReturnValue([null, []]);

    const { result } = renderHook(() => useScorepads('JanK'));
    const [error, apiResult] = result.current;

    expect(error).toBeNull();
    expect(apiResult).toStrictEqual([]);
  });

  it('returns a reformated scorepad array when given a scorepad array as input', () => {
    (useApi as jest.Mock).mockReturnValue([null, [{
      _id: '1', game: 'JanK', players: [{ _id: '12', name: 'Matteo', picture: '' }], created_at: '2021-02-07T16:22:55.000Z',
    }]]);

    const { result } = renderHook(() => useScorepads('JanK'));
    const [error, apiResult] = result.current;

    expect(error).toBeNull();
    expect(apiResult).toStrictEqual([{
      id: '1', game: 'JanK', players: [{ id: '12', name: 'Matteo', picture: '' }], date: '2021-02-07T16:22:55.000Z',
    }]);
  });
});
