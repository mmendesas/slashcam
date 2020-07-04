import React from 'react';

import { Container, Content, FormContent, Title, Form } from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Video from '../../components/Video';

function Login() {
  return (
    <Container>
      <Logo />
      <Content>
        <Video width="670px" height="401px" />
        <FormContent>
          <Title>Enter the room and enjoy it!</Title>
          <Form>
            <Input label="your name:" name="username" />
            <Input label="room id:" name="room" />
            <Button onClick={() => { }}>Join room</Button>
          </Form>
        </FormContent>
      </Content>
    </Container>
  );
}

export default Login;
