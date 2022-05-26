var http = require('http');
var fs = require('fs');

var app = http.createServer(function (request, response) {
    function doRequest(req, res) {
        fs.readFile('./detail.html', 'UTF-8',
            function (err, data) {
                response.writeHead(200);
                response.end(data);
            });
    }//*/
    doRequest();
});

app.listen(8088)