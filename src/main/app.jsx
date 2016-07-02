import 'font-awesome/css/font-awesome.css';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import '../../public/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {loggedInReducer, profileDisplayReducer, newActivityInoutReducer} from './reducers/reducers.js';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {firebaseConfig} from './config';
import Login from './components/login-page.jsx';
import RegPage from './components/reg-page.jsx';

firebase.initializeApp(firebaseConfig);

// const store = createStore(loggedInReducer);
const store = createStore(combineReducers({
  profileDisplay: profileDisplayReducer,
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
    console.log('authenticated');
    store.dispatch({
      type: 'LOGGED_IN',
      user: user
    });
  } else {
    store.dispatch({
      type: 'LOGGED_IN',
      user: null
    });
    console.log('not authenticated');
  }
});


firebase.database().ref('customers/nordea').on('value', function(entry) {
  console.log('from db: ' + entry.val().name);
});
