/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Container, Header, Text, Content, Footer, Info } from './styles';

import Input from '../Input';
import Button from '../Button';
import Message from '../Message';

function Chat({ data, onSentMsg }) {
  const { messages = [], user = {} } = data;
  const [msg, setMsg] = useState('');

  const scrollToMyRef = () => {
    const lastItem = document.querySelector('.list-messages > li:last-child');
    if (lastItem) lastItem.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToMyRef();
  }, [messages]);

  const handleSubmit = () => {
    if (msg !== '') {
      onSentMsg(msg);
      setMsg('');
    }
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') handleSubmit();
  };

  return (
    <Container>
      <Header>
        <div>
          <Text>{user?.username}</Text>
          <Text color="#f8a832">online: 4</Text>
        </div>
        <Text>room: {user?.room}</Text>
      </Header>
      <Content>
        <ul className="list-messages">
          {messages.map(({ user: from, message }, idx) => {
            return (
              <Message
                key={`${idx}`}
                user={from}
                message={message}
                remote={user?.username !== from}
              />
            );
          })}
        </ul>
        <Info>grosa</Info>
      </Content>
      <Footer>
        <Input
          name="msgToSent"
          onChange={e => setMsg(e.target.value)}
          onKeyDown={handleKeyDown}
          value={msg}
          placeholder="Send a message to everyone..."
        />
        <Button onClick={handleSubmit}>Send</Button>
      </Footer>
    </Container>
  );
}

export default Chat;
