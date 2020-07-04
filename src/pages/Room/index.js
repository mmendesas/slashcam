import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Chat from '../../components/Chat';
import Video from '../../components/Video';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, Content, Bottom } from './styles';

import OnlineUsers from '../../components/OnlineUsers';

function useSocket(url) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIO = io(url);
    setSocket(socketIO);

    return () => {
      socketIO.disconnect();
    }

  }, []);

  return socket;
}

const user = [
  { name: 'Josh', active: true },
  { name: 'Julia', active: false },
  { name: 'Bill', active: false },
];

const fakeMsgs = [
  { user: 'you', message: 'teste 123321' },
  {
    user: 'bill_murphy',
    message: 'teste 123321 Groselha 123 asdffdsasdf',
    remote: true,
  },
  { user: 'josh', message: 'teste 123321', remote: true },
];

function Room() {
  const messages = useState(fakeMsgs);
  const socket = useSocket('http://localhost:3000')

  useEffect(() => {
    if (socket) {
      socket.on('received-message', data => {
        console.log('message received:', data);
      });
    }
  }, [socket]);

  function handleSentMsg(message) {
    socket.emit('send-message', { user: 'marcio_mendes', message });
  }

  return (
    <Container>
      <Chat messages={messages} onSentMsg={handleSentMsg} />
      <Content>
        <Video id="remote-video" width="800px" height="430px" />
        <Bottom>
          <Video id="local-video" width="250px" height="150px" />
          <OnlineUsers users={user} />
          <Button onClick={() => { }} width="150px">
            Logout
          </Button>
        </Bottom>
      </Content>
    </Container>
  );
}

export default Room;
