import React from 'react';

import {
  Container,
  Content,
  Preview,
  FormContent,
  Title,
  Form,
} from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  return (
    <Container>
      <Logo />
      <Content>
        <Preview />
        <FormContent>
          <Title>Enter the room and enjoy it!</Title>
          <Form>
            <Input label="your name:" name="username" />
            <Input label="room id:" name="room" />
            <Button>Join room</Button>
          </Form>
        </FormContent>
      </Content>
    </Container>
  );
}

export default Login;
