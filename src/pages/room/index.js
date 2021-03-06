import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const socket = useSocket('http://localhost:3000');
  const router = useRouter();
  const [state] = useStore();

  const { auth } = state;

  useEffect(() => {
    if (!auth.signed) {
      router.push('/login');
    }
  }, [auth.signed, router]);

  useEffect(() => {
    if (socket) {
      socket.on('received-message', data => {
        setMessages([...messages, data]);
      });
    }
  }, [messages, socket]);

  function handleSentMsg(message) {
    const data = { user: auth.user.username, message };
    setMessages([...messages, data]);
    socket.emit('send-message', data);
  }

  if (!auth.signed) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Chat data={{ messages, user: auth.user }} onSentMsg={handleSentMsg} />
      <Content>
        <Video id="remote-video" width="800px" height="430px" />
        <Bottom>
          <Video id="local-video" width="250px" height="150px" />
          <OnlineUsers users={user} />
          <Button onClick={() => {}} width="150px">
            Logout
          </Button>
        </Bottom>
      </Content>
    </Container>
  );
}

export default Room;
