var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(process.env + "");
}).listen('1080', '0.0.0.0');
console.log('Server running at http://0.0.0.0:1080');

console.log(process.env);

