import { act, renderHook } from '@testing-library/react-hooks';

import useErrorHandler from '../useErrorHandler';

describe('useErrorHandler', () => {
  it('returns no error when initialized', () => {
    const { result } = renderHook(() => useErrorHandler(async () => { }));
    const [error] = result.current;

    expect(error).toBeNull();
  });

  it('returns an executable handler', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useErrorHandler(callback));
    const handler = result.current[1];

    act(() => {
      handler();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('returns an error if handler failes', async () => {
    const expectedError = new Error('Expected error');
    const callback = jest.fn().mockRejectedValueOnce(expectedError);
    const { result } = renderHook(() => useErrorHandler(callback));
    const handler = result.current[1];

    await act(async () => {
      handler();
    });

    const [error] = result.current;
    expect(error).toBe(expectedError);
  });
});
