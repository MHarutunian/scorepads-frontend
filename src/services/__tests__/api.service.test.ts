import {
  get,
  post,
  patch,
  put,
  remove,
} from '../api.service';

describe('methods without data', () => {
  describe.each([get, remove])('%p', (method) => {
    it('returns response JSON if request succeeds', async () => {
      const expectedResult = { test: 42 };
      const response = new Response(JSON.stringify(expectedResult));
      jest.spyOn(window, 'fetch').mockResolvedValue(response);

      const result = await method('/foo/success');
      expect(result).toStrictEqual(expectedResult);
    });

    it('returns no response if request succeeds but response is empty', async () => {
      const response = new Response('', { status: 204 });
      jest.spyOn(window, 'fetch').mockResolvedValue(response);

      const result = await method('/foo/success');
      expect(result).toBeNull();
    });

    it('returns an error if response contains error', async () => {
      const response = new Response('Expected error response', {
        status: 400,
        statusText: 'Bad Request',
      });
      jest.spyOn(window, 'fetch').mockResolvedValue(response);

      await expect(method('/foo/errorResponse'))
        .rejects.toThrow('Request to /foo/errorResponse failed: Bad Request');
    });

    it('returns an error if request fails', async () => {
      const error = new Error('Expected error');
      jest.spyOn(window, 'fetch').mockRejectedValue(error);

      await expect(method('/foo/errorResponse')).rejects.toThrow(error);
    });
  });
});

describe('methods with data', () => {
  describe.each([post, patch, put])('%p with data', (method) => {
    it('returns response JSON if request succeeds', async () => {
      const expectedResult = { id: 13 };
      const response = new Response(JSON.stringify(expectedResult));
      jest.spyOn(window, 'fetch').mockResolvedValue(response);

      const result = await method('/foo/success', { test: 37 });
      expect(result).toStrictEqual(expectedResult);
    });

    it('returns no response if request succeeds but response is empty', async () => {
      const response = new Response('', { status: 204 });
      jest.spyOn(window, 'fetch').mockResolvedValue(response);

      const result = await method('/foo/success', { test: 37 });
      expect(result).toBeNull();
    });

    it('returns an error if response contains error', async () => {
      const response = new Response('Expected error response', {
        status: 400,
        statusText: 'Bad Request',
      });
      jest.spyOn(window, 'fetch').mockResolvedValue(response);

      await expect(method('/foo/errorResponse', { test: 37 }))
        .rejects.toThrow('Request to /foo/errorResponse failed: Bad Request');
    });

    it('returns an error if request fails', async () => {
      const error = new Error('Expected error');
      jest.spyOn(window, 'fetch').mockRejectedValue(error);

      await expect(method('/foo/errorResponse', { test: 37 })).rejects.toThrow(error);
    });
  });
});
