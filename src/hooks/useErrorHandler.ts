import { useCallback, useState } from 'react';

/**
 * Executes a callback in an error handler, providing any error as a state variable
 *
 * @param callback the callback to use the error handler for
 * @returns the error, if any, along with the error handler wrapping the callback
 */
const useErrorHandler = (callback: () => Promise<void>): [Error | null, () => Promise<void>] => {
  const [error, setError] = useState<Error | null>(null);
  const handler = useCallback(async () => {
    setError(null);

    try {
      await callback();
    } catch (e) {
      setError(e);
    }
  }, [callback]);

  return [error, handler];
};

export default useErrorHandler;
