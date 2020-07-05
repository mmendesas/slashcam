/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';

import authReducer, { authStore } from './modules/auth/reducers';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authStore);

  const combinedReducers = {
    store: {
      ...authState,
    },
    dispatch: action => authDispatch(action),
  };

  return <Provider value={combinedReducers}>{children}</Provider>;
};

export { store, StateProvider };
