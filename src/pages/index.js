import { useEffect } from 'react';
import io from 'socket.io-client';

// open connection with server
const socket = io('http://localhost:3000');

function App() {
  useEffect(() => {
    socket.on('received-message', data => {
      console.log('From server MSG', data);
    });
  }, []);

  return <div>First Test</div>;
}

export default App;
