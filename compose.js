// The COMPOSE concept in JavaScript is about combining multiple functions into a single function,
// where the output of one becomes the input of the next
// executed right → left.

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

const add2 = (x) => x + 2;
const multiply = (x) => x * 3;
const square = (x) => x * x;

const result = compose(square, multiply, add2);
// console.log(result(2)); //144

// PIPE - left to right
function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}
const result2 = pipe(square, multiply, add2);
// console.log(result2(2)); //14

// With Multiple Arguments (Advanced)
// This will work for multiple args for only the first function
// Classic compose CANNOT handle multiple-argument functions beyond the first one.
function composeMulArgs(...fns) {
  return function (...args) {
    return fns.reduceRight((acc, fn, index) => {
      return index === fns.length - 1 ? fn(...acc) : fn(acc);
    }, args);
  };
}
const sum = (a, b) => a + b;
const double = (x) => x * 2;

const composed = composeMulArgs(double, sum);
composed(2, 3); // 10

// Return Multiple Values (Tuple Pattern)
const sum2 = (a, b) => [a + b, b];
// Why return [a + b, b] instead of just a + b?
// After one function runs, only one value is passed forward
const multiply2 = (a, b) => a * b;

const composeMulti =
  (...fns) =>
  (...args) =>
    fns.reduceRight(
      (acc, fn) => (Array.isArray(acc) ? fn(...acc) : fn(acc)),
      args
    );
const r = composeMulti(multiply2, sum2);
console.log("===>", r(2, 3)); //15

// Cleaner Alternative (Object Pattern)
const sum3 = ({ a, b }) => ({ result: a + b, b });
const multiply3 = ({ result, b }) => result * b;
