const express = require("express");
const app = express();
const socket = require("socket.io");

const server = app.listen(3000,function(){
    console.log("Server is running...");
});
app.use(express.static('public')); // static file

//socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log("Made socket connection",socket);
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});








