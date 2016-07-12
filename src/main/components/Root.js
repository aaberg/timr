import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import Login from './login-page.jsx';
import RegPage from './reg-page.jsx';


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route
        path="/"
        component={Login} />
      <Route
        path="/reg"
        component={RegPage} />
    </Router>
  </Provider>
);

export default Root;