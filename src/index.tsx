/* @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './service-worker';
import StyleReset from './styles/reset';
import StyleDefault from './styles/default';
import StyleFont from './styles/font';
import { Global } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={[StyleReset, StyleFont, StyleDefault]} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
