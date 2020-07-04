import React from 'react';
import { string, bool } from 'prop-types';

import { Container } from './styles';

function Message({ user, message, remote }) {
  return (
    <Container remote={remote}>
      <strong>{user}: </strong>
      {message}
    </Container>
  );
}

Message.defaultProps = {
  remote: false,
  user: '',
  message: '',

};

Message.propTypes = {
  user: string,
  message: string,
  remote: bool,
};

export default Message;
