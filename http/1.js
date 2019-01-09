const http = require('http');
const fs = require("fs");
let server = http.createServer(function (req, res) {
    console.log(req.url);
    fs.readFile(`./${req.url}`, function (err, data) {
        if (err) {
            res.writeHead(404,
                {"ContentType": "text/html;charset=UTF-8",});
            res.end('fail')
        }
        res.writeHead(200,
            {"ContentType": "text/html;charset=UTF-8",});
        res.end(data)
    })
});
server.listen(3003, "127.0.0.1")