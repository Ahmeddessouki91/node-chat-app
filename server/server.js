const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New client");
})

io.on('disconnect', () => {
    console.log('user was disconnected');
});

server.listen(port, () => console.log(`Chat app is started  ${port}`));