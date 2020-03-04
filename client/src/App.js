import React from 'react';

//import react router using props as query parameters
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import joinNavbar from './components/joinNavbar/joinNavbar';
import Chat from './components/Chat/Chat';

//creating App.js compoment
const App = () => (
    // when user first comes on the page, user's going to be greeted with our "Join" component, user will pass data in the login form through query strings, user must pass the data to get to the chat room. Once user pass the query data, server will render the "Chat" component.
    //Return the component call Router as we declare on line 4
    <Router>
        {/* This router has two routes: root path, and Chat path */}

        <Route path = "/" exact component = { joinNavbar } />
        <Route path = "/" exact component = { Join } />
        <Route path = "/chat" exact component = { Chat } />
    </Router>
);

export default App;//export the component to available for use in another files