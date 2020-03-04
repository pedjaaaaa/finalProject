import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { makeMainRoutes } from './routes';

// const routes = makeMainRoutes();

//everything we create is going to be inside of this App and put in the 'root' below
import App from './App'; //import App component from App.js file

//react will import all the code that we write inside the div with this id 'root' in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));

