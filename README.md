# finalProject
* CHAT-APP
* creating a client side
npx create-react-app client => creating a project app

* install dependencies for client-side
npm install --save react-router-dom
npm i react-scroll-to-bottom --save
npm i react-emoji --save
npm install query-string
npm i socket.io-client
npm i react-scroll-to-bottom

client/src
delete the built-in src folder to build our own components
create a new src folder in the client directory
create an index.js, App.js in src folder
==========================================================================
* index.js
import React from 'react';
import ReactDOM from 'react-dom';

//everything we create is going to be inside of this App and put in the 'root' below
import App from './App'; //import App component from App.js file

//react will import all the code that we write inside the div with this id 'root' in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));
===========================================================================

client/src/index.js => initiate react application
client/src/App.js => set up initial project structure
create 2 components that instructed in the App.js(Join, Chat)


* creating components folders
src/components/Join/Join.js
src/components/Join/Join.css
src/components/Chat/Chat.js
src/components/Chat/Chat.css
======================================================================================================================================
* creating a server side
make a server folder in the finalProject-master
mkdir server
cd server
npm init -y => initialize package.json
install dependencies for server-side:
CORS: Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.
npm install --save cors nodemon express socket.io
======================================================================================================================================
server/package.json
add this line to the scripts to run server automatically when make change
"start": "nodemon index.js",
======================================================================================================================================