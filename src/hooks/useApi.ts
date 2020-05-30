import { useEffect, useState } from 'react';

const BASE_URL = '/api';

/**
 * Fetches resources from an API endpoint and returns them.
 *
 * @param path the path to the endpoint to fetch
 * @returns the error and the result returned from the endpoint.
 *    Only one of these will be set at any time.
 */
const useApi = <T>(path: string): [Error | null, T | null] => {
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const sendRequest = async () => {
      setResult(null);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}${path}`);

        if (!response.ok) {
          throw new Error(`Request to ${path} failed: ${response.statusText}`);
        }

        setResult(await response.json());
      } catch (e) {
        setError(e);
      }
    };

    sendRequest();
  }, [path]);

  return [error, result];
};

export default useApi;
