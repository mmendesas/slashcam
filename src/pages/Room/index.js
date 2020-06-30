import React from 'react';

import Chat from '../../components/Chat';
import Video from '../../components/Video';
import Button from '../../components/Button';

import { Container, Content, Bottom, AllUsers, Title } from './styles';

function Room() {
  return (
    <Container>
      <Chat />
      <Content>
        <Video id="remote-video" width="737px" height="400px" />
        <Bottom>
          <Video id="local-video" width="220px" height="130px" />
          <AllUsers>
            <Title>Online Users: 4</Title>
          </AllUsers>
          <Button>Logout</Button>
        </Bottom>
      </Content>
    </Container>
  );
}

export default Room;
