import React from 'react';

import Chat from '../../components/Chat';
import Video from '../../components/Video';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, Content, Bottom, AllUsers, Title } from './styles';

import OnlineUsers from '../../components/OnlineUsers';

const user = [
  { name: 'Josh', active: true },
  { name: 'Julia', active: false },
  { name: 'Bill', active: false },
];

function Room() {
  return (
    <Container>
      <Chat />
      <Content>
        <Video id="remote-video" width="800px" height="430px" />
        <Bottom>
          <Video id="local-video" width="250px" height="150px" />
          <OnlineUsers users={user} />
          <Button width="150px">Logout</Button>
        </Bottom>
      </Content>
    </Container>
  );
}

export default Room;
