var db = require('./db.js');
var http = require('http');

var app = http.createServer(function (request, response) {
    db.query('SELECT * FROM test', function (error, result) {
        console.log(result);
        var html =
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>nodejs - mysql</title>
                    <meta charset="utf-8"
        </head>
        <body>
        <p>${result[0].name} / ${result[0].age} / ${result[0].birthday} </p>
        <p>${result[1].name} / ${result[1].age} / ${result[1].birthday} </p>
        </body>
        </html>
        `

        response.writeHead(200);
        response.end(html);
    });
})

app.listen(8088)