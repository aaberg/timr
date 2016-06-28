import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {firebaseConfig} from './config';
import '../public/css/style.css';
import './firebaseConfig.js'

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  (<div>test</div>),
  document.getElementById('content')
);

firebase.database().ref('customers/nordea').on('value', function(newVal) {
  console.log(newVal.name);
});
