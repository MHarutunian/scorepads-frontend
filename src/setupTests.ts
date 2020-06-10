// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { WebSocket } from 'mock-socket';

window.WebSocket = WebSocket;

jest.spyOn(window, 'fetch').mockImplementation(
  () => Promise.reject(new Error('Fetch was called without being mocked')),
);
