import React from 'react';

import { Container, Header, Text, Content, Footer } from './styles';

import Input from '../Input';
import Button from '../Button';
import Message from '../Message';

const messages = [
  { user: 'you', message: 'teste 123321' },
  {
    user: 'bill_murphy',
    message: 'teste 123321 Groselha 123 asdffdsasdf',
    remote: true,
  },
  { user: 'josh', message: 'teste 123321', remote: true },
];

function Chat() {
  return (
    <Container>
      <Header>
        <div>
          <Text>marcio_mendes</Text>
          <Text color="#f8a832">online: 4</Text>
        </div>
        <Text>room: 123</Text>
      </Header>
      <Content>
        {messages.map(({ user, message, remote }) => (
          <Message user={user} message={message} remote={remote} />
        ))}
      </Content>
      <Footer>
        <Input name="msgToSent" placeholder="Send a message to everyone..." />
        <Button>Send</Button>
      </Footer>
    </Container>
  );
}

export default Chat;
