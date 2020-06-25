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

const createGenerateClassName = () => {
  let counter = 0;
  return (rule, sheet) =>
    `c${Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4)}-${
      rule.key
    }-${counter++}`;
};

const jss = create(preset());

jss.options.createGenerateClassName = createGenerateClassName;

function App() {
  return (
    <StylesProvider jss={jss}>
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
    </StylesProvider>
  );
}

export default App;
