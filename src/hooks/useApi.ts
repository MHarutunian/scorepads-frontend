import {
  useEffect, useState, useCallback, useMemo,
} from 'react';

import { get } from '../services/api.service';
import useErrorHandler from './useErrorHandler';

/**
 * Fetches resources from an API endpoint and returns them.
 *
 * @param path the path to the endpoint to fetch
 * @returns the error and the result returned from the endpoint.
 *    Only one of these will be set at any time.
 */
const useApi = <S, T>(
  path: string,
  mapper: (result: S) => T,
  initialValue?: T,
): [Error | null, T | null] => {
  const [result, setResult] = useState<S | null>(null);
  const callback = useCallback(async () => {
    setResult(null);
    setResult(await get(path));
  }, [path]);
  const [error, handler] = useErrorHandler(callback);

  useEffect(() => {
    if (!initialValue) {
      handler();
    }
  }, [initialValue, handler]);

  const mappedResult = useMemo(() => {
    if (!result) {
      return null;
    }
    return mapper(result);
  }, [result, mapper]);

  return [error, initialValue || mappedResult];
};

export default useApi;
