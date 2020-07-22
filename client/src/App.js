import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './routes/Layout';
import NoMatchPage from './components/common/NoMatchPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
      <ToastContainer limit={3} containerId='momato' />
    </Provider>
  );
}

export default App;
