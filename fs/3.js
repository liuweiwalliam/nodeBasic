const fs = require('fs');
fs.stat(
    './writeTest.txt',
    function (err, stats) { //读取文件信息
        if (err) {
            console.log(err);
        }
        console.log('done');
    })
fs.rename(  //修改文件名
    './writeTest.txt',
    '新的文件名',
    function (err, stats) {
        if (err) {
            console.log(err);
        }
        console.log('done');
    })
fs.unlink(  //删除文件
    './writeTest.txt',
    function (err, stats) {
        if (err) {
            console.log(err);
        }
        console.log('done');
    })
fs.readdir(  //读取文件夹
    '文件夹地址',
    function (err, files) {
        if (err) {
            console.log(err);
        }
        console.log('done');
    })
fs.mkdir(  //创建文件夹
    '文件夹名称',
    function (err, files) {
        if (err) {
            console.log(err);
        }
        console.log('done');
    })
fs.rmdir('文件夹名称', //删除文件夹
    function (err, files) {
        if (err) {
            console.log(err);
        }
        console.log('done');
    })
fs.watch('文件夹地址', //监听文件夹
    {recursive: true},
    (eventType, file) => {
        console.log(eventType, file);
    })
