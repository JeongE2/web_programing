var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'gfgd',
    database:'study'
});

module.exports = db;