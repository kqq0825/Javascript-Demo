// 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal

function MySetInterVal(fn, a, b) {
  let t = 0;
  let timer = null;
  let loop = () => {
    timer = setTimeout(() => {
      t++;
      console.log(a + t * b);
      fn();
      loop();
    }, a + t * b);
  };
  loop();
  return () => {
    clearTimeout(timer);
  };
}

let myTimer = MySetInterVal(
  () => {
    console.log(111);
  },
  1000,
  2000
);

myTimer();
