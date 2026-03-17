// async function a() {
//   try {
//     return await Promise.reject(1);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function b() {
//   try {
//     return Promise.reject(2);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function start() {
//   await a();
//   await b();
// }

// start();

console.log("start");
new Promise(() => {
  console.log("executor");
});
console.log("end");
