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
};

Message.propTypes = {
  user: string.isRequired,
  message: string.isRequired,
  remote: bool,
};

export default Message;
