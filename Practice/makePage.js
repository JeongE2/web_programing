var db = require('./db.js');
var http = require('http');
var sql = 'SELECT * FROM food WHERE num = ?'
var fs = require('fs');

var makePage = function (num) {
    var app = http.createServer(function (request, response) {
        db.query(sql, num, function (error, result) {
            //console.log(result);
            ///*
            function doRequest(req, res) {
                fs.readFile('./detail.html', 'UTF-8', 
                    function(err, data) {
                        //console.log(data);
                        response.writeHead(200); //, {'Content-Type': 'text/html'}
                        //res.write(data);
                        response.end(data);
                    });
             }//*/
   
             doRequest();
        });
    })

    app.listen(8088)
}

module.exports = {
    makePage,
};