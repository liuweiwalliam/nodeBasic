const ejs = require('ejs');
const fs = require("fs");
const http = require('http');
let server = http.createServer(function (req, res) {
    fs.readFile('./1.html','utf-8', function (err, htmlData) {
        if (err) {
            console.log("文件路径错误");
            res.writeHead(404, {"ContentType": "text/html;charset=UTF-8",});
            res.end('fail')
        }
        let testJsData = {
            "a": 1,
            "b": 2,
            "c": 3,
        };
        let data = {
            a: 1,
            b: 2,
            c: 3,
            obj: JSON.stringify(testJsData)
        };
        console.log(htmlData);
        let htmlStr = ejs.render(htmlData, data);
        res.writeHead(200,
            {"ContentType": "text/html;charset=UTF-8",});
        res.end(htmlStr)
    })
});
server.listen(3003, "127.0.0.1")