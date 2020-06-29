import React from 'react';
import { string, func } from 'prop-types';

import { Container } from './styles';

function Button({ children, onClick }) {
  return <Container onClick={onClick}>{children}</Container>;
}

Button.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
