var static = require('node-static');

var port = 8080;
var file = new static.Server();

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log("http://localhost:" + port);
