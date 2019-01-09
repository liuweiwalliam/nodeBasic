//event
const Event = require('events');

class CustomerEvent extends Event {

}

let ce = new CustomerEvent();
ce.on("test", function () {
    console.log(1);
});
setInterval(()=>{
    ce.emit('test')
},500);