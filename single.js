var http = require('http');
var modale = require('./modal/node');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});

res.write(modale.sum(10,20).toString());
res.write(modale.mul(20,20).toString());
res.write(modale.myDateTime());
res.write(req.url);
res.end("bye bye");
}).listen(8080);