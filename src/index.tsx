import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';
import { createGlobalStyle } from 'styled-components';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root tag is not defined');
}

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
    background-color: #dddddd;
    font-family: 'Poppins';
    border: none;
  }
`;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <Layout />
    </Provider>
  </React.StrictMode>
);
