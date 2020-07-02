/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, func } from 'prop-types';

import { Container } from './styles';

function Button({ children, onClick, ...props }) {
  return (
    <Container onClick={onClick} {...props}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
