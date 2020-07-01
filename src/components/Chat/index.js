import React, { useState } from 'react';

import { Container, Header, Text, Content, Footer } from './styles';

import Input from '../Input';
import Button from '../Button';
import Message from '../Message';

function Chat({ messages = [], onSentMsg }) {
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    if (msg !== '') {
      onSentMsg(msg);
      setMsg('');
    }
  };

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
        <Input
          name="msgToSent"
          onChange={e => setMsg(e.target.value)}
          value={msg}
          placeholder="Send a message to everyone..."
        />
        <Button onClick={handleSubmit}>Send</Button>
      </Footer>
    </Container>
  );
}

export default Chat;
