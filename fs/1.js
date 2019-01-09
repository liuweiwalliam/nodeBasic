const fs = require('fs');
//readFileSync同步的读取的方法
fs.readFile('./2.js', 'utf-8', function (err, data) { //异步的读取
    if (err) {
        return "err"
    }
    console.log(data);
})
