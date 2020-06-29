/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';

import { Container } from './styles';

function Input({ name, label, type, ...props }) {
  return (
    <Container>
      <label htmlFor={name}>
        {label && label}
        <input type={type} {...props} />
      </label>
    </Container>
  );
}

Input.defaultProps = {
  label: null,
  type: 'text',
};

Input.propTypes = {
  label: string,
  name: string.isRequired,
  type: string,
};

export default Input;
