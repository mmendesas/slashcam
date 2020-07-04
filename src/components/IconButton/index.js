import React from 'react';
import { string, number, func } from 'prop-types';

import { Container } from './styles';

function IconButton({ Icon, color, size, onClick }) {
  return (
    <Container onClick={onClick}>
      <Icon color={color} size={size} />
    </Container>
  );
}

IconButton.propTypes = {
  Icon: func.isRequired,
  color: string,
  size: number,
  onClick: func.isRequired,
};

IconButton.defaultProps = {
  color: '#fff',
  size: 32,
};

export default IconButton;
