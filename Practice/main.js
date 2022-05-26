var db = require('./db.js');
var http = require('http');
var sql = 'SELECT * FROM food WHERE num = 2'

var app = http.createServer(function (request, response) {
    db.query(sql, function (error, result) {
        console.log(result);
        ///*
        var html =
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>nodejs - mysql</title>
                    <meta charset="utf-8"
        </head>
        <body>
        <p>${result[0].name}  </p>
        </body>
        </html>
        `//*/

        response.writeHead(200);
        response.end(html);
    });
})

app.listen(8088)