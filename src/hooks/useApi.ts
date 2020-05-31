import { useEffect, useState, useCallback } from 'react';

import { get } from '../services/api.service';
import useErrorHandler from './useErrorHandler';

/**
 * Fetches resources from an API endpoint and returns them.
 *
 * @param path the path to the endpoint to fetch
 * @returns the error and the result returned from the endpoint.
 *    Only one of these will be set at any time.
 */
const useApi = <T>(path: string): [Error | null, T | null] => {
  const [result, setResult] = useState<T | null>(null);
  const callback = useCallback(async () => {
    setResult(null);
    setResult(await get(path));
  }, [path]);
  const [error, handler] = useErrorHandler(callback);

  useEffect(() => {
    handler();
  }, [handler]);

  return [error, result];
};

export default useApi;
