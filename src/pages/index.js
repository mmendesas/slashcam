import React, { useEffect } from 'react';
import io from 'socket.io-client';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Room from './Room';

// open connection with server
const socket = io('http://localhost:3000');

function App() {
  useEffect(() => {
    socket.on('received-message', data => {
      console.log('From server MSG', data);
    });

    socket.on('now', data => {
      console.log('FROM SERV', data);
    });
  }, []);

  return (
    <>
      <Header />
      <Room />
      <GlobalStyle />
    </>
  );
}

export default App;
