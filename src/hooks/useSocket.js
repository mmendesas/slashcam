import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function useSocket(url) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIO = io(url);
    setSocket(socketIO);

    return () => {
      socketIO.disconnect();
    };
  }, []);

  return socket;
}

export default useSocket;
