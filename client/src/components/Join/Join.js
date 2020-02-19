//{useState} => This is a hooks for using state inside of the function for based components
import React, { useState } from 'react';

import { Link } from 'react-router-dom';//this link is used to link to our /chat path

import './Join.css';

//declare hooks inside of the function based components
//name, setter function to pass name state
//room, setter function to pass room state
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
       <div className="joinOuterContainer">
           <div className="joinInnerContainer">
               <h1 className="heading">Join</h1>
               <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
               <div><input placeholder="Name" className="joinInput nt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
               <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to ={`/chat?name=${name} & room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
               </Link>
           </div>
       </div>
    )
}
export default Join;