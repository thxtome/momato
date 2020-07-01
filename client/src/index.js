import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'JSDongkang-Regular',
  },
});

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    rootElement,
  );
} else {
  render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    rootElement,
  );
}
serviceWorker.register();
