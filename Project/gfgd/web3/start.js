/*
db에서 가져온 데이터로 구성한 웹 페이지
*/

var http = require('http');
var fs = require('fs');
var db = require('./db.js');

function send404(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 ERROR...");
    response.end();
}
function onRequest(request,response){
    if(request.method == 'GET' && request.url == '/'){
    }
}

var app = http.createServer(function (request, response) {
  var sql = `SELECT * FROM food WHERE num = 1`;

  function templateHTML(table){
    var data = fs.readFileSync('food.html', 'utf-8');
    data += `<script>
    document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#ntable');
    table.innerHTML+='${table}';})
    </script>`
    return data;
  }
  function templateTable(nutrition){
    var names = ['식품명','1회제공량(g)','열량 (kcal)','탄수화물 (g)' ,'단백질 (g)' ,'지방 (g)' ,'당류 (g)' ,'나트륨 (mg)' ,'콜레스테롤 (mg)' ,'포화지방산 (g)' ,'트랜스지방산 (g)']
    var list = `<table><tbody><tr><td><h3>${names[0]} | </h3></td><td><h3>&nbsp&nbsp&nbsp${nutrition[0]}</h3></td><tr></tbody></table><table id = nut><tbody><hr><br>`;
    var i = 1;
    var space = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
    while(i<names.length){
        list = list + `<tr><td  style="background-color: ivory;">${names[i]}${space}<td><td> ${nutrition[i]}${space}</td><td  style="background-color: ivory;">${names[i+1]}${space}<td><td> ${nutrition[i+1]}${space}</td><tr>`;
        i = i+2;
    }
    list = list+'</tbody></table>';
    return list;
  }

  db.query(sql, function (error, result) {
    var nutrition = []; //result에서 순서대로 11개 항목 저장한 배열필요
    //console.log(result[0])
    for (let key in result[0]){
        nutrition.push(result[0][key]);
    }
    //for(let i in nutrition){
    //    console.log(nutrition[i])
    //}

    var table = templateTable(nutrition);
    var template = templateHTML(table)+`</body></html>`;
    response.writeHead(200);
    response.end(template);
   
  });
});

app.listen(3000);