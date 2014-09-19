var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(process.env));
}).listen('1080', '0.0.0.0');
console.log('Server running at http://0.0.0.0:1080');


