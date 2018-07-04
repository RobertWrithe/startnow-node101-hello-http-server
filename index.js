// write your code here
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World');
  console.log(request.url);
  res.end();
});

server.listen(8080, function () {
  console.log('Server is listening on localhost:8080');
  console.log('Recieved GET request for: /');
});