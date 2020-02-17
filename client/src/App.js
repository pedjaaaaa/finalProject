import React from 'react';

//import react router using props as query parameters
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

//create component(single arrow based component)
// const App = () => ({
//     return()
// })

const App = () => (
    // when user first comes on the page, user's going to be greeted with our "Join" component, user will pass data in the login form through query strings, user must pass the data to get to the chat room. Once user pass the query data, server will render the "Chat" component.
    <Router>
        <Route path = "/" exact component = { Join } />
        <Route path = "/chat" exact component = { Chat } />
    </Router>
);

export default App;//export the component to available for use in another files