const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf-8');
let a = Buffer.alloc(10, 1);
let b = Buffer.from([1, 2, 3, 4, 5, 6]);
console.log(b);

//中文乱码问题

const buf = Buffer.from("中文乱码");
for (let i = 0; i <= buf.length; i += 5) {
    const b = Buffer.allocUnsafe(5);
    buf.copy(b, 0, i);
    console.log(b.toString());
}
for (let i = 0; i <= buf.length; i += 5) {
    const b = Buffer.allocUnsafe(5);
    buf.copy(b, 0, i);
    console.log(decoder.write(b));
}