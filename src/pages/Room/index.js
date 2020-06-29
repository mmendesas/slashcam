import React from 'react';

import Chat from '../../components/Chat';
import { Container } from './styles';

function Room() {
  return (
    <Container>
      <Chat />
      <div>First Test</div>
    </Container>
  );
}

export default Room;
