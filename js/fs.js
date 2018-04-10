/**
 * 测试读写文件
 */


// let fs = require('fs');
// fs.open('test.txt', 'r',
// 	function (err, handle) {
// 	// console.log(handle,9);
// 	// return
// 		let buffer = new Buffer(1000);
// 		fs.read(handle, buffer, 0, 1000, null),
// 			function (err, length) {
// 				console.log(buffer.toString('utf8', 0, length));
// 				fs.close(handle, function () {
// 					console.warn(close);
// 				})
// 			}
// 	})

let foo = 1;

function bar() {
	foo = 10;
	let a = 1;
	return;
	function foo() { // 相当于 var foo

	}
}

bar();
console.warn(foo); // 1