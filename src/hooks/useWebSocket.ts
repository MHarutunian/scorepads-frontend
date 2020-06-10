import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type MessagePayload = string | string[] | object | object[];

type MessageCallback = (type: string, payload?: MessagePayload) => void;

type HookResult = [Error | null, MessageCallback];

/**
 * The base URL to prepend to all web socket connections.
 */
const BASE_URL = `ws://${window.location.host}/ws`;

/**
 * Uses a web socket connection to send and receive message.
 *
 * @param path path to the web socket endpoint to connect to
 * @param onMessage handler for message events received through the web socket
 * @returns the error, if any, and the callback to use for sending messages
 */
const useWebSocket = (path: string, onMessage: MessageCallback): HookResult => {
  const socket = useRef<WebSocket>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket(`${BASE_URL}${path}`);

      ws.onopen = () => {
        setError(null);
      };

      ws.onmessage = (message) => {
        const { type, payload } = JSON.parse(message.data);
        onMessage(type, payload);
      };

      ws.onclose = () => {
        socket.current = undefined;
        // attempt to reconnect after 5 seconds
        setTimeout(connect, 5000);
      };

      ws.onerror = () => {
        setError(new Error('Connecting WebSocket failed.'));
      };

      socket.current = ws;
    };

    connect();

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, [path, onMessage]);

  const sendMessage = useCallback((type: string, payload?: MessagePayload) => {
    if (socket.current) {
      const data = payload === undefined ? { type } : { type, payload };
      socket.current.send(JSON.stringify(data));
    }
  }, []);

  return [error, sendMessage];
};

export default useWebSocket;
