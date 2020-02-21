//require all necessary dependencies
const express = require('express');

//https://socket.io/docs/#Using-with-Node-http-server
const socketio = require('socket.io');

//Node. js has a built-in module called HTTP, which allows Node. js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } =require('./users.js');

//we will run on port 5000
//but when we deploy, our server is going to require a specific port and it will be inside of the process environment
const PORT = process.env.PORT || 5000;

//require router
const router = require('./router');

//set up socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//real-time connection and disconnection
//https://socket.io/get-started/chat/
io.on('connection', (socket) => {//user has joined; client instance of a socket
    socket.on('join', ({ name, room }, callback) => {//something will happen on join
        const { error, user } = addUser({ id: socket.id, name, room });
        
        if(error) return callback(error);

        //emit a new event
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});

        //send message to everyone in the room except the new user
        socket.broadcast.to(user.room.emit('message', { user: 'admin', text: `${user.name}, has joined!`}));

        socket.join(user.room);

        //trigger response immediately after socket.on event is being emitted   
        callback();
    });

    //creating events for user generated messages
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        callback();
    });

    //disconnect, no socket parameter needed because client left
    socket.on('disconnect', () => {
        console.log("User had left!!!");
    })
});


//Call router as a middleware
app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));