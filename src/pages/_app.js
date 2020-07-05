/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import GlobalStyle from '../styles/global';
import Layout from '../components/Layout';
import { StateProvider } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </StateProvider>
  );
}

export default MyApp;
