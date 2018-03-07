/*

 */
let http = require("http");
function process_request(req, res) {
	let body = `<div style="color:green">test</div>`;
	let con_length = body.length;
	res.writeHead(200, {
		a: 'test',
		Location:'http://www.baidu.com'
	});
	res.end(body)
}
let server = http.createServer(process_request);
server.listen(80);
console.warn( 'serverRun1');
console.warn(123);