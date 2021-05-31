import { renderHook } from '@testing-library/react-hooks';
import { mapTerms } from '../../services/map.service';

import useApi from '../useApi';

describe('useApi', () => {
  it('returns empty error and result while fetching', () => {
    // we use a promise here that never returns anything, so the hook never returns a result
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => new Promise<Response>(() => { }));
    const { result } = renderHook(() => useApi('/foo/loading', mapTerms));
    const [error, apiResult] = result.current;

    expect(error).toBeNull();
    expect(apiResult).toBeNull();
  });

  it('returns response JSON if request succeeds', async () => {
    const expectedResult = { test: 42 };
    const response = new Response(JSON.stringify(expectedResult));
    jest.spyOn(window, 'fetch').mockResolvedValue(response);

    const { result, waitForNextUpdate } = renderHook(() => useApi('/foo/success', mapTerms));

    await waitForNextUpdate();

    const [error, apiResult] = result.current;

    expect(error).toBeNull();
    expect(apiResult).toStrictEqual(expectedResult);
  });

  it('returns an error if request fails', async () => {
    const expectedError = new Error('Expected error');
    jest.spyOn(window, 'fetch').mockRejectedValue(expectedError);

    const { result, waitForNextUpdate } = renderHook(() => useApi('/foo/error', mapTerms));

    await waitForNextUpdate();

    const [error, apiResult] = result.current;

    expect(error).toBe(expectedError);
    expect(apiResult).toBeNull();
  });
});
