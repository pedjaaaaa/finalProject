import React, { useState, useEffect } from 'react';
import queryString from 'query-string';//retrieving data from the URL
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';

let socket;

const Chat = ({ location }) => { //{ location } =>this is a prop
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    // // https://reactjs.org/docs/hooks-effect.html
    //useEffect is a hooks that let you use lifecycle methods side effects in function components
    useEffect(() => {

        //retrieve data that users entered while joining(name,room)
        const { name, room } = queryString.parse(location.search);

         socket = io(ENDPOINT);

         setName(name);
         setRoom(room);

        //  https://socket.io/get-started/chat/#Emitting-events
         socket.emit('join', { name, room }, () => {

         });

         return () => {
             //disconnect effect
             socket.emit('disconnect')//disconnect must be same name with backend on server/index.js

             socket.off();
         }

         console.log(socket);
    },[ENDPOINT, location.search]);
    // ==============================================================================================================================
    //useEffect for handling messages
    useEffect(() => {
        socket.on('message', (message) =>{
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    //================================================================================================================================
    return (
        <div className="outerContainer">
            <div className="container"> 
                {/* <input value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                /> */}

                <InfoBar room= {room} />
            </div>
        </div>
    )
}

export default Chat;
