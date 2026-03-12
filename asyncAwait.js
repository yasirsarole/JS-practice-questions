// ASYNC FUNCTION ALWAYS RETURNS A PROMISE
async function getData() {}
const data = getData();

console.log(data);
// Promise { undefined }
data.then((val) => console.log(val));
// undefined

////////////////////////////////////////////////////////////////////////////
async function hello() {
  return "Hello";
}
console.log(hello());
// Promise { 'Hello' }

////////////////////////////////////////////////////////////////////////////
async function returnsPromise() {
  return new Promise((res, rej) => res("Promise resolved value!!"));
}
const retPr = returnsPromise();
console.log(retPr);
// Promise { <pending> }
retPr.then((val) => console.log("retPr then===>", val));
// retPr then===> Promise resolved value!!

////////////////////////////////////////////////////////////////////////////
// ASYNC AND AWAIT COMBO ARE USED TO HANDLE PROMISES
// AWAIT IS A KEYWORD, THAT CAN ONLY BE USED INSIDE AN ASYNC FUNCTION

const p = new Promise((res, rej) => {
  res("promise resolved!!");
});
async function handleAsync() {
  const val = await p;
  console.log("val===>", val);
}
handleAsync();
//   val===> promise resolved!!

////////////////////////////////////////////////////////////////////////////
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1 resolved!");
  }, 10000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2 resolved!");
  }, 5000);
});

async function handleMultiplePr() {
  const pr1 = await p1;
  console.log(pr1);
  const pr2 = await p2;
  console.log(pr2);
}
handleMultiplePr();
// This result is after 10 seconds
// p1 resolved
// p2 resolved

////////////////////////////////////////////////////////////////////////////
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3 resolved!");
  }, 5000);
});

const p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p4 resolved!");
  }, 10000);
});

async function handleMultiplePr2() {
  const pr1 = await p3;
  console.log(pr1);
  const pr2 = await p4;
  console.log(pr2);
}
handleMultiplePr2();
// Below line is printed after 5 seconds
// p3 resolved
// Below line is printed after 10 seconds
// p4 resolved

////////////////////////////////////////////////////////////////////////////
// EXAMPLE USING FETCH WITH ERROR HANDLING
// fetch functions returns a promise whose resolved value is a readable stream(Response)
// Response.json() => this is again a promise who resolved value is a jsonValue
const API_URL = "https://api.github.com/users/yasirsarole";
async function getUserDetails() {
  try {
    const userDetails = await fetch(API_URL); // this returns a promise
    const result = await userDetails.json(); // this also returns a promise

    console.log("userDetails", result);
  } catch (error) {
    console.log(error);
  }
}
getUserDetails();
// ERROR HANDLING CAN BE DONE AS BELOW AS WELL
// getUserDetails().catch(err => console.log(err))
// This will work as getUserDetails is an async function and async functions returns promise

// DIFFERENCE BETWEEN ASYNC AWAIT AND PROMISES
// Both Promises and async/await are used to handle asynchronous operations in JavaScript, but they differ mainly in syntax and readability.
// async/await is syntactic sugar on top of Promises. 
// It makes asynchronous code look like synchronous code.
// Behind the scene JS is using it's Promise.
