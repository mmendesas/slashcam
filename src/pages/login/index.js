import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useSocket from '../../hooks/useSocket';
import useStore from '../../hooks/useStore';

import { login } from '../../store/modules/auth/actions';

import { Container, Content, FormContent, Title, Form } from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Video from '../../components/Video';

function Login() {
  const router = useRouter();
  const socket = useSocket('http://localhost:3000');
  const [state, dispatch] = useStore();

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    if (socket) {
      socket.on('err', data => {
        console.error('GROOOO', data);
      });

      socket.on('user_joined', data => {
        console.log("user logged", data);
        dispatch(login(data));
        router.push('/room');
      });
    }
  }, [socket]);

  function handleSubmit(e) {
    e.preventDefault();
    if (username === '' || room === '') {
      console.error('Fill the fields');
    }
    // send event to socket
    socket.emit('join_room', { room, username });
  }

  return (
    <Container>
      <Logo />
      <Content>
        {/* <Video width="670px" height="401px" /> */}
        <FormContent>
          <Title>Enter the room and enjoy it!</Title>
          <Form>
            <Input
              name="username"
              label="your name:"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <Input
              name="room"
              label="room id:"
              onChange={e => setRoom(e.target.value)}
              value={room}
            />
            <Button onClick={handleSubmit}>Join room</Button>
          </Form>
        </FormContent>
      </Content>
    </Container>
  );
}

export default Login;
