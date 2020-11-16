/**
 * The base URL to prepend to all request URLs.
 */
const BASE_URL = '/api';

/**
 * Sends a request using the provided options, and returns the response, if any.
 *
 * @param method the HTTP method to use for sending the request
 * @param path the path to the API endpoint to send the request to
 * @param init the init options to pass to `fetch()`
 * @returns a promise for the response, containing the parsed JSON, if available
 */
const request = async (method: string, path: string, init?: RequestInit) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    ...init,
  });

  if (!response.ok) {
    throw new Error(`Request to ${path} failed: ${response.statusText}`);
  }

  return response.status === 204 ? null : response.json();
};

/**
 * Sends a request with a JSON body using the provided options.
 *
 * @param method the HTTP method to use for sending the request
 * @param path the path to the API endpoint to send the request to
 * @param data the data to send as JSON in the request body
 * @returns a promise for the response, containing the parsed JSON, if available
 */
const requestWithData = (method: string, path: string, data: object) => request(method, path, {
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

/**
 * Sends a GET request to the specified path to retrieve resources.
 *
 * @param path the path to get resources from
 * @return the parsed response body
 */
export const get = (path: string) => request('GET', path);

/**
 * Sends a POST request to the specified path to create a resource.
 *
 * @param path the path to POST a resource to
 * @param data the data to send in the request body
 * @return the parsed response body, if available
 */
export const post = (path: string, data: object) => requestWithData('POST', path, data);

/**
 * Sends a PATCH request to the specified path to update a resource.
 *
 * @param path the path to PATCH a resource at
 * @param data the data to send in the request body
 */
export const patch = (path: string, data: object) => requestWithData('PATCH', path, data);

/**
 * Sends a PUT request to the specified path to create or update a resource.
 *
 * @param path the path to PUT the resource to
 * @param data the data to send in the request body
 */
export const put = (path: string, data: object) => requestWithData('PUT', path, data);

/**
 * Sends a DELETE request to the specified path to remove a resource.
 *
 * @param path the path to the resource to DELETE
 */
export const remove = (path: string) => request('DELETE', path);
