var a = 1;
(function () {
  var a;
  //   undefined + 1 ---> NaN
  console.log(a + this.a);
  a = "2";
  //   "2" + 1 ---> "21"
  console.log(a + this.a);
})();

var name = 1;
(function () {
  var name;
  //   1 is converted to string as window.name is always a string
  //   undefined + "1" ---> undefined1
  console.log(name + this.name);
  name = "2";
  //   "2" + "1" ---> "21"
  console.log(name + this.name);
})();

// In Hoisting arrow functions behaves like variables
// If a variable is assigned to a function, in memory creation phase this will act as a variable hoisting
// let and const variables are Hoisted but they sit in Temporal Dead Zone until a value is assigned