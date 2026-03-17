// PROTOTYPE
let arr = ["yasir", "arfat"];

let object = {
  name: "Yasir",
  city: "Thane",
  getIntro: () => {
    return "I'm yasir residing at Thane";
  },
};

// Whenever we create a JS object, JS engine attaches object to hidden properties and functions
// These methods and functions can be accessed via prototype
// Prototype is an object attached to every array/object/functions in Javascript

// in the above example arr.__proto__ and Array.prototype are same
console.log(arr.__proto__);
console.log(Array.prototype);

// PROTOTYPAL INHERITANCE / PROTOTYPE CHAIN
// Array.prototype --> returns ARRAY prototype methods and properties
// Array.prototype.prototype ---> returns OBJECT prototype methods and properties
// Array.prototype.prototype.prototype ---> returns null (end of prototype chain)

// Same chain is followed by a function
// Function.prototype.prototype.prototype
