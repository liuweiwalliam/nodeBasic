const fs = require('fs');
//readFileSync同步的读取的方法
let rs = fs.creatReadStream('./writeTest.txt');
rs.pipe(process.stdout)

