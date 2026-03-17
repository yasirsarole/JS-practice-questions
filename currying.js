// CURRYING - EXAMPLE OF CLOSURES

// simple currying - manual
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
let addition = add(1)(2)(3);
// console.log("result===>", addition);

// with arrow function
const addArrow = (a) => (b) => (c) => a + b + c;
addArrow(1)(2)(3); // 6

// generic currying function
// fn.length = number of parameters the function expect
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
// example
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);
curriedSum(1)(2)(3);
curriedSum(1, 2)(3);
curriedSum(1)(2, 3);

// infinite currying
function infiniteSum(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteSum(a + b);
    }
    return a;
  };
}

infiniteSum(1)(2)(3)(4)(); // 10
