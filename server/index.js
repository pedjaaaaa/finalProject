//Setting up server
//require(importing) all necessary dependencies
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

//require router
const router = require('./router');

//Setting up socket.io
//https://socket.io/docs/#Using-with-Node-http-server
const app = express();
const server = http.createServer(app);
const io = socketio(server);//socket.io instance created => this is the backend

// https://socket.io/get-started/chat/
//This will run when we have a client connection on our io instance when client joining and leaving our chat room
io.on('connection', (socket) => {//(socket) will connected as a client side socket
    console.log('Connection is on....');

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);
    });

    //disconnect, no socket parameter needed because client left
    socket.on('disconnect', () => {
        console.log('User had left!');
    })
});


//Call router as a middleware
app.use(router);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

