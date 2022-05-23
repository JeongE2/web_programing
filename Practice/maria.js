var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    prot:3306,
    user:'root',
    password:'gfgd',
    database:'study'
});

conn.connect();

conn.query('SELECT * FROM test', function(error, results, fields){
    if(error) {
        console.log(error);
    }
    console.log(results);
})
conn.end();
//module.exports = conn;