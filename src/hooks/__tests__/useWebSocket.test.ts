import WebSocketServer from 'jest-websocket-mock';
import { act, renderHook } from '@testing-library/react-hooks';

import useWebSocket from '../useWebSocket';

describe('useWebSocket', () => {
  it('returns no error when initialized', async () => {
    const wsServer = new WebSocketServer('ws://localhost/ws/foo');
    const { result } = renderHook(() => useWebSocket('/foo', jest.fn()));

    // error should be `null` while connecting
    let [error] = result.current;
    expect(error).toBeNull();

    await wsServer.connected;

    // error should still be `null` after connection was successful
    [error] = result.current;
    expect(error).toBeNull();

    WebSocketServer.clean();
  });

  it.each([
    { type: 'without-payload' },
    { type: 'with-string-payload', payload: 'something' },
    { type: 'with-string-array-payload', payload: ['something', 'else', 'entirely'] },
    { type: 'with-object-payload', payload: { isObject: true } },
    { type: 'with-object-array-payload', payload: [{ isObject: true }, { isAnotherObject: true }] },
  ])('sends message through socket', async (data) => {
    const wsServer = new WebSocketServer('ws://localhost/ws/foo');
    const { result } = renderHook(() => useWebSocket('/foo', jest.fn()));

    await wsServer.connected;

    const sendMessage = result.current[1];

    sendMessage(data.type, data.payload);

    await expect(wsServer).toReceiveMessage(JSON.stringify(data));

    WebSocketServer.clean();
  });

  it('invokes callback when receiving a message', async () => {
    const wsServer = new WebSocketServer('ws://localhost/ws/foo');
    const onMessage = jest.fn();
    const data = {
      type: 'test',
      payload: {
        something: [13, 37],
      },
    };

    renderHook(() => useWebSocket('/foo', onMessage));

    await wsServer.connected;

    wsServer.send(JSON.stringify(data));

    expect(onMessage).toHaveBeenCalledWith(data.type, data.payload);

    WebSocketServer.clean();
  });

  it('reconnects if the socket is closed', async () => {
    jest.useFakeTimers();

    let wsServer = new WebSocketServer('ws://localhost/ws/foo');

    renderHook(() => useWebSocket('/foo', jest.fn()));

    wsServer.close();

    // open a new server connection, but don't run hook again (should happen automatically)
    wsServer = new WebSocketServer('ws://localhost/ws/foo');
    const onServerConnect = jest.fn();
    wsServer.on('connection', onServerConnect);

    expect(onServerConnect).not.toHaveBeenCalled();

    jest.runAllTimers();

    await wsServer.connected;

    // there should be another server connection by now
    expect(onServerConnect).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
    WebSocketServer.clean();
  });

  it('sets an error and reconnects if connection fails', async () => {
    const wsServer = new WebSocketServer('ws://localhost/ws/foo');
    const { result } = renderHook(() => useWebSocket('/foo', jest.fn()));

    await wsServer.connected;

    act(() => {
      wsServer.error();
    });

    const [error] = result.current;
    expect(error).not.toBeNull();
  });
});
