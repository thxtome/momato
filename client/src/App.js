import React from 'react';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './routes/Layout';
import NoMatchPage from './components/common/NoMatchPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  if (!navigator.userAgent === 'ReactSnap') {
    document.querySelector('#root').style.display = 'block';
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={['/', '/tomato', '/calendar', '/template', '/counter', '/member-info']}
            component={Layout}
          />
          <Route component={NoMatchPage} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
