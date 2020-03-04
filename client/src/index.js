import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { makeMainRoutes } from './routes';

// const routes = makeMainRoutes();

//everything we create is going to be inside of this App and put in the 'root' below
import App from './App'; //import App component from App.js file

import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCmx-I6giOfw2aGNLdPXleBBTTtgFcmYpY",
    authDomain: "client-7fdc0.firebaseapp.com",
    databaseURL: "https://client-7fdc0.firebaseio.com",
    projectId: "client-7fdc0",
    storageBucket: "client-7fdc0.appspot.com",
    messagingSenderId: "612808774986",
    appId: "1:612808774986:web:d74aedd38f9144421a1db3",
    measurementId: "G-CVRNPRCF6N"
})

//react will import all the code that we write inside the div with this id 'root' in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));

