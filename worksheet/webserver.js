var http = require('http');
var url = require('url');
var server = http.createServer(
    function (request, response) {
        var parsedUrl = url.parse(request.url, true);
		    if (parsedUrl.pathname == '/add') {
            // todo: find out why it does not parse as Int
            var a = parseFloat(parsedUrl.query.a);
            var b = parseFloat(parsedUrl.query.b);
            var sum = a+b;

            response.setHeader("Content-Type", "int");
            response.end(sum);
        } else {
            response.statusCode = 404;
            response.end('Not found!\n');
        }
    }
);
server.listen(8080);
