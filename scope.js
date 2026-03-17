// Scope means, where we can access specific function or a variable
// Lexical Environment is the local memory, along with the lexical environment of its parent
// SCOPE CHAIN -> Way of finding parents lexical environment (Chain of lexical environemt of parent)

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
// 55555

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}       
// 01234

function a() {
  console.log(b);
}
a();
var b = 10;
// undefined, because when a is invoked it's execution context doesn't have a reference to b

function d() {
  console.log(e);
}
var e = 10;
d();
// 10, because when d is invoked it's execution context have a reference to e
