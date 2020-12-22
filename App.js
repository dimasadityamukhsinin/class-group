import React from 'react';
import { Provider } from 'react-redux';
import store from './src/config/redux/store';
import Router from './src/config/router';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}