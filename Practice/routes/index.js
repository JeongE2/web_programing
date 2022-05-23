var express = require('express');
var router = express.Router();

const maria = require('../database/connect/maria');

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/*router.get('/create', function (req, res) {
    maria.query('CREATE TABLE DEPARTMENT ('
        + 'NAME VARCHAR(200) NULL DEFAULT NULL COLLATE utf8mb3_general_ci,'
        + 'PRIMARY KEY (DEPART_CODE) USING BTREE)', function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            } else {
                console.log("err : " + err);
                res.send(err);
            }
        });
});*/

router.get('/select', function (req, res) {
    maria.query('SELECT * FROM TEST', function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            } else {
                console.log("err : " + err);
                res.send(err);
            }
        });
});

module.exprots = router;