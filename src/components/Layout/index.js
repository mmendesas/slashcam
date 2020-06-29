/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
