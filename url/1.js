const http = require('http');
const url = require("url");
let server = http.createServer(function (req, res) {
    let path = url.parse(req.url)
    res.end('end');
    for (let key in path) {
        console.log(key, path[key]);

    }
});
server.listen(3003, "127.0.0.1")