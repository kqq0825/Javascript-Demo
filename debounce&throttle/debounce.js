/* 防抖函数
对于一些持续触发的动作，在动作结束后一段时间后触发回调函数，如果在这段时间内再次发生触发动作，则计时重新开始。
例子：
输入框频繁发生输入的动作，每个动作会对应一次回调函数的执行。
防抖的处理就是 我在停止这种频繁输入这个动作，比如3秒后触发一次回调函数，如果在这三秒内再次发生输入这个动作，则会重新开始计时。

实现思路：
1.对回调函数的执行频率做一个限制处理，且规定一个时间段后触发——可以一个防抖函数的参数为1.cb 2.time，返回一个function 
*/

function cb() {
  console.log("this is callback fn");
}

function debounce(cb, time) {
  return function (args) {
    //处理函数中this的执行
    let that = this;
    cb.timer && clearTimeout(cb.timer);
    cb.timer = setTimeout(() => {
      cb.apply(that, args);
    }, time);
  };
}

let debounceResultFn = debounce(cb, 1000);

let inputDom = document.getElementById("debounce");

inputDom.addEventListener("keydown", function () {
  console.log("changed");
  debounceResultFn();
});
