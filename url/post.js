const http = require('http');
const fs = require("fs");
const querystring = require("querystring");
let server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        console.log("post");
        let postData = "";
        req.addListener("data", function (chunk) {
            postData += chunk;
        });
        req.addListener("end", function () {
            // let param = queryString.parse(postData);
            res.writeHead(200, {
                "ContentType": "text/html;charset=UTF-8",
            });
            console.log(querystring.parse(postData));
            res.end(postData)
        })
    } else {
        console.log('get');
        res.end(req.method)
    }
});
server.listen(3003, "127.0.0.1")

