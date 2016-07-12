import 'font-awesome/css/font-awesome.css';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import '../../public/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {firebaseConfig} from './config';
import {userAuthenticated, userUnAuthenticated} from './utils/auth.js';
import configureStore from "./configureStore";
import Root from './components/Root';

firebase.initializeApp(firebaseConfig);
const store = configureStore();

firebase.auth().getRedirectResult().then((res) => {
  if (res.user) {
    window.location.href="/reg";
  }
});

ReactDOM.render(
  <Root store={store} />,
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
