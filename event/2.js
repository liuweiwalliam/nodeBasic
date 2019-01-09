//event
const Event = require('events');

class CustomerEvent extends Event {

}
let ce = new CustomerEvent();
//同一对象可以绑定多个事件，同一事件也可以绑定多个回调函数
ce.on("test", function (arg1,arg2) {
    console.log(arg1,arg2);
});
ce.once("test", function (arg1,arg2) { //绑定后只调用一次
    console.log(arg1,arg2);
});
ce.removeListener('事件名',"该事件绑定的函数名"); //移除单个事件
ce.removeAllListeners('事件名'); //移除该事件名下的所有事件
setInterval(()=>{
    ce.emit('test','arg1','arg2')
},500);