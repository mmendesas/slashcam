import React from 'react';
import { arrayOf, object } from 'prop-types';

import { Container, Badge, Title, User } from './styles';

function OnlineUsers({ users }) {
  return (
    <Container>
      <ul>
        {users.map(({ name, active }) => (
          <User key={name} active={active}>
            <Badge />
            <span>{name}</span>
          </User>
        ))}
      </ul>
      <Title>Online Users: {users.length}</Title>
    </Container>
  );
}

OnlineUsers.propTypes = {
  users: arrayOf(object).isRequired,
};

export default OnlineUsers;
