var tools = require('./makePage.js');

console.log(typeof tools.makePage);
tools.makePage(2);


/*
var fs = require('fs');

function doRequest(req, res) {
    console.log("hi");
    fs.readFile('./detail.html', 'UTF-8', 
        function(err, data) {
            console.log(data);
            res.writeHead(200, {'Content-Type': 'text/html'});
            //res.write(data);
            res.end(data);
        });
 }

 doRequest();*/
