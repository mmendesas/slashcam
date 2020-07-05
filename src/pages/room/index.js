import React, { useEffect, useState } from 'react';

import useSocket from '../../hooks/useSocket';
import useStore from '../../hooks/useStore';

import Chat from '../../components/Chat';
import Video from '../../components/Video';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, Content, Bottom } from './styles';

import OnlineUsers from '../../components/OnlineUsers';

const user = [
  { name: 'Josh', active: true },
  { name: 'Julia', active: false },
  { name: 'Bill', active: false },
];

function Room() {
  const [messages, setMessages] = useState([]);
  const socket = useSocket('http://localhost:3000')
  const globalState = useStore();

  console.log("ASDFDSAF", globalState);

  useEffect(() => {
    if (socket) {
      socket.on('received-message', data => {
        console.log('message received:', data);
        setMessages([...messages, data]);
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
