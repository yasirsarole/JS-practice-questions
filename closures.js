// CLOSURE - is the combination of a function bundled together with reference to it's surrounding state (the lexical environment)
// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// x()(); // 7

// print 1,2,3,4,5 each after one second
// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// 6,6,6,6,6

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// 1,2,3,4,5

function xx() {
  for (var i = 1; i <= 5; i++) {
    const close = (i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    };

    close(i);
  }
}
xx();
// 1,2,3,4,5

// USAGE
// Module Design Pattern
// Currying
// Function like once
// memoize
// maintaining state in async world
// setTimeout
// Iterators
// and many more...

// ADVANTAGES
// Data Encapsulation - Private variables
// Customised functions
// Useful in Async Code
// Avoids Global Scope Pollution - we don’t need global variables to maintain state.
// Enables Currying

// DISADVANTAGES
// Memory Leaks - Closures keep references to outer variables, preventing garbage collection.
// Performance Overhead - Each closure creates a new scope → more memory + slower execution if overused
// Debugging Becomes Hard - Tracking variable scope across nested closures can be tricky, especially in large apps.
// Unintentional Variable Retention, e.g below
function outer() {
  let a = 10;
  let b = 20;

  return function () {
    return a; // but b is also retained in memory
  };
}

// “Closures are powerful for encapsulation, but they can cause memory leaks if not handled carefully because they retain references to their lexical scope.
