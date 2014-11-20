var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect().use(serveStatic(__dirname)).listen(8080);
var io = require('socket.io')(server);




io.on('connection', function (socket) {
  socket.on('audio', function(data){
    console.log(data);
  })
});

