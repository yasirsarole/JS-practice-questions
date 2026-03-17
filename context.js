"use strict";
// THIS --> works differently in a strict mode and a non-strict mode

// this in a GLOBAL SCOPE
console.log(this);
// represents global object
// in case of browser ==> window

// this in a FUNCTION
//
function x() {
  console.log(this);
  // undefined - in case of strict mode
  // Window - in case of non-strict mode
}

// if the value of this keyword is undefined or null, this will be replaced with global object, only in NON-STRICT mode
// this in STRICT MODE - (this substitution)

// this keyword value depends on HOW this IS CALLED (window)
x(); // undefined
window.x(); // Window

// this in an object method
// difference between a function and a method --> function inside an object is method
const obj = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};
obj.x(); // 10

// call apply bind methods (sharing methods)
// used to share methods
const obj2 = {
  a: 20,
};
obj.x.call(obj2); // 20

// this in an ARROW FUNCTION
// take value of this from it's lexical scope
const obj3 = {
  a: 30,
  x: () => {
    console.log(this);
  },
};
obj3.x(); // Window

// this in NESTED ARROW FUNCTIONS
const obj4 = {
  a: 40,
  x: function () {
    // enclosing lexical context
    return () => {
      console.log(this);
    };
  },
};
obj4.x()(); // {a:40, x: fn}

// this inside a DOM
// this - reference to html element
// <button onclick="alert(this)"></button> // this--->button element
