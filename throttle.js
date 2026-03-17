// Throttle in JavaScript is a technique used to limit how often a function can run within a given time period.

function throttle(func, wait) {
  let flag = true;
  let lastArgs = null;
  let lastContext = null;

  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;

      setTimeout(() => {
        flag = true;

        if (lastArgs) {
          func.apply(lastContext, lastArgs);
          lastArgs = null;
        }
      }, wait);
    } else {
      // this will run until setTimeout is finished
      // as soon as setTimeout is finished if(lastArgs) condition will be true
      lastArgs = args;
      lastContext = this;
    }
  };
}

// Implement a basic throttle when asked in interview
function basicThrottle(func, wait) {
  let flag = true;

  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, wait);
    }
  };
}
