//{useState} => This is a hooks for using state inside of the function for based components
import React, { useState } from 'react';

import { Link } from 'react-router-dom';//this link is used to link to our /chat path

import './Join.css';

//name, setter function to pass name state
//room, setter function to pass room state
const Join = () => {
    //declare hooks inside of the function based components
    const [name, setName] = useState('');//pass the name state in the empty string
    const [room, setRoom] = useState('');
    return (
       <div className="joinOuterContainer">
           <div className="joinInnerContainer">
               <h1 className="heading">Join</h1>
               {/* When user put something in the input, event will occur and we can get data from this event with event.target.value which holds our data */}
               <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
               <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>

               {/* link to chat application */}
               <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to ={`/chat?name=${name} & room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
               </Link>
           </div>
       </div>
    )
}
export default Join;