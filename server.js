const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));

const racers = {'player1':0, 'player2':0};
io.on('connection', (socket) => {
 
    io.emit('click', racers);
 
    console.log(socket.id, 'connected');
    socket.on('click', (data) => {
        racers[data] += 5;
        io.emit('click', racers);
        console.log(data);
    });
});
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!
server.listen(3000);