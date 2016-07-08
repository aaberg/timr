import 'font-awesome/css/font-awesome.css';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import '../../public/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {loggedInReducer, profileReducer, newActivityInoutReducer} from './reducers/reducers.js';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {firebaseConfig} from './config';
import Login from './components/login-page.jsx';
import RegPage from './components/reg-page.jsx';
import {userAuthenticated, userUnAuthenticated} from './utils/auth.js';

firebase.initializeApp(firebaseConfig);

// const store = createStore(loggedInReducer);
const store = createStore(combineReducers({
  profile: profileReducer,
  auth: loggedInReducer,
  newActivity: newActivityInoutReducer
}));

firebase.auth().getRedirectResult().then((res) => {
  if (res.user) {
    window.location.href="/reg";
  }
});

ReactDOM.render((
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
),
  document.getElementById('content')
);

// Changes state with user authentication status.
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    userAuthenticated(store, user);
  } else {
    userUnAuthenticated(store);
  }
});
