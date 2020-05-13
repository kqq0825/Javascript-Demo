function cb() {
  console.log("this is callback fn");
}
/* 
实现思路
执行完一次回调函数后，通过计时器setTimeout间隔一段时间后再次执行
参数 1.cb 2.time  3.mode
 */
function throttle(cb, t) {
  let timerId;
  //上次执行的时间
  let canRun = true;
  return function (args) {
    let that = this;
    if (!canRun) {
      return;
    } else {
      cb.apply(that, args);
      canRun = false;
      timerId && clearTimeout(timerId);
      timerId = setTimeout(() => {
        //cb.apply(that, args);
        canRun = true;
      }, t);
    }
  };
}

//通常的节流会有两种形式，回调执行在节流前进行执行或者在节流后去执行
//增加参数mode,上述方法是默认在节流前执行。
//mode immediately | delay
function throttleWithMode(cb, t, mode = "immediately") {
  let timerId;
  //上次执行的时间
  let canRun = false;
  if (mode === "immediately") {
    canRun = true;
  } else {
    let outTimerId = setTimeout(() => {
      canRun = true;
      clearTimeout(outTimerId);
      console.log("start");
    }, t);
  }
  return function (args) {
    let that = this;
    if (!canRun) {
      return;
    } else {
      cb.apply(that, args);
      canRun = false;
      timerId && clearTimeout(timerId);
      timerId = setTimeout(() => {
        canRun = true;
      }, t);
    }
  };
}

// let throttleResultFn = throttle(cb, 2000);
let throttleResultFn = throttleWithMode(cb, 2000, "delay");

setInterval(() => {
  throttleResultFn();
}, 100);
