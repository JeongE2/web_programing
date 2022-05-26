var db = require('./db.js');
var sql = 'SELECT * FROM food WHERE num = ?'

var selectByNum = function (num) {
    console.log("good");
    /*
    db.query(sql, num, function (error, result) {
        console.log(result);
    });*/
    return 'wow';
}

module.exports = {
    selectByNum,
};