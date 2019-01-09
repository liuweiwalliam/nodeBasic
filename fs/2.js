const fs = require('fs');
fs.writeFile('./writeTest.txt', 'this is a test!', 'utf-8',function (err, data) { //写出一个文件
    if (err) {
        console.log(err);
    }
    console.log('done');
})