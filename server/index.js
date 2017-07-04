var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'dist')));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/dist/index.html');
// });

app.get('/test', function(req, res) {
  res.send('<h1>hi</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8988, function(){
  console.log('listening on *:8988');
});
