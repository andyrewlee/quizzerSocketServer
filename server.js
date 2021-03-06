var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function() {
  console.log('listening on port', app.get('port'));
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log("Connection from...");
  console.log(socket.id); 

  socket.on("A", function() {
    io.sockets.emit("A");
  });

  socket.on("B", function() {
    io.sockets.emit("B");
  });

  socket.on("C", function() {
    io.sockets.emit("C");
  });

  socket.on("D", function() {
    io.sockets.emit("D");
  });
});
