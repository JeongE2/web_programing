/*
db에서 가져온 데이터로 구성한 웹 페이지
*/

var http = require('http');
var url = require('url');
var db = require('./db.js');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var num = queryData.id;
  var sql = `SELECT * FROM food WHERE num = ${num}`;

  function templateHTML(title, table){
    return `
    <!doctype html>
    <html>
    <head>
      <title>식품영양성분정보 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>식품영양성분 정보</h1>
      ${table}
    </body>
    </html>
    `;
  }
  function templateTable(nutrition){
    var names = ['식품명','1회제공량(g)','열량 (kcal)','탄수화물 (g)' ,'단백질 (g)' ,'지방 (g)' ,'당류 (g)' ,'나트륨 (mg)' ,'콜레스테롤 (mg)' ,'포화지방산 (g)' ,'트랜스지방산 (g)']
    var list = '<div><table border="1"><tbody>';
    var i = 0;
    while(i<names.length){
        list = list + `<tr><td>${names[i]}<td><td>${nutrition[i]}</td><tr>`;
        i = i+1;
    }
   // list = list + '<tr><td>1회제공량<td><td>50g</td><tr>'
      //list = list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
     
    list = list+'</tbody></table></div>';
    return list;
  }

  db.query(sql, function (error, result) {
    var nutrition = []; //result에서 순서대로 11개 항목 저장한 배열필요
    //console.log(result[0])
    for (let key in result[0]){
        nutrition.push(result[0][key]);
    }
    // for(let i in nutrition){
    //     console.log(nutrition[i])
    // }

    var title = queryData.id;               //하지만 할줄 몰라서 전부다 가져옴
    var table = templateTable(nutrition);
    var template = templateHTML(title,table);
    response.writeHead(200);
    response.end(template);
  });
});
app.listen(3000);