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
const io = socketio(server);

//Call router as a middleware
app.use(router);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

