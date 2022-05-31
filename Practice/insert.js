var db = require('./db.js');
var http = require('http');

var name = '바나나주스'
var day = '100'
var kcal = '20.00'
var tan = '10.50'
var dan = '0.7'
var ji = '0.2'
var dang = '0'
var nat = '2'
var col = '0'
var po = '0'
var trans = '17'
var company = 'n/a'
var num = '1'

db.query(`
INSERT INTO food VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
[name, day, kcal, tan, dan, ji, dang, nat, col, po, trans, company, num],
function(error, result){
    if(error){
        throw error;
    }
    Response.writeHead(302, {Location: '/'});
    Response.end(); 
    }
)