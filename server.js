//require lib
var express = require('express');

// create the app
var app = express();


// listen on port 3k
var server = app.listen(3000);


app.use(express.static('public'));

console.log('My socket server is running');

var socket = require('socket.io');

//create input output socket object with server/port of our server, then we have to deal with new events, like IF THERE IS A NEW CONNECTION
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log(socket.id);

    //IF WE HAVE A MOUSE EMIT EVENT FROM CLIENT, RUN THE MOUSEMSG FUNCTION(WE HAVE TO RIGHT IT FIRST)
    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        //emit to only other clients
        socket.broadcast.emit('mouse', data);
        //global emit
        //io.sockets.emit('mouse', data);
        console.log(data);
    }
}
















