import React, { useState, useEffect } from 'react';
import queryString from 'query-string';//retrieving data from the URL
import io from 'socket.io-client';

let socket;

// https://reactjs.org/docs/hooks-effect.html
//useEffect is a hooks that let you use lifecycle methods side effects in function components
const Chat = ({ location }) => { //{ location } =>this is a prop
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

         socket = io(ENDPOINT);

         setName(name);
         setRoom(room);

        //  https://socket.io/get-started/chat/#Emitting-events
         socket.emit('join', { name, room }, () => {

         });

         return () => {
             socket.emit('disconnect')//disconnect must be same name with backend on server/index.js

             socket.off();
         }

         console.log(socket);
    },[ENDPOINT, location.search]);
    return (
        <h1>Chat</h1>
    )
}

export default Chat;
