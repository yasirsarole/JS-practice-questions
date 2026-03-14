// BEFORE PROMISES, HOW WE USED TO WRITE CODE
const cart = ["shoes", "pants", "toys"];

const createOrder = (cart, proceedToPayment) => {
  // once create order is done, invoke proceedToPayment
};

const proceedToPayment = (showOrderSummary) => {
  // once proceedToPayment is completed, invoke showOrderSummary
};

const showOrderSummary = (updateWallet) => {
  // once show order summary is completed, invoke update wallet
};

const updateWallet = () => {
  // updateWallet
};

// the code will look like below
createOrder(cart, function () {
  proceedToPayment(function () {
    showOrderSummary(function () {
      updateWallet();
    });
  });
});

// To solve problem of CALLBACK HELL and INVERSION OF CONTROL, we can use promise(used to handle async actions)
// Promise is nothing but an object {data: undefined}, whose value is resolved or rejected after some time
// ACTUAL DEFINITON - A promise is an object representing the eventual completion or failure of an asynchronous operation

// In the below example proceedToPayment does not depend on createOrder
const promise = createOrder(cart);
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// Real Example
const API_URL = "https://api.github.com/users/yasirsarole";
const user = fetch(API_URL); // returns a promise

// How to write below code using promises
createOrder(cart, function () {
  proceedToPayment(function () {
    showOrderSummary(function () {
      updateWallet();
    });
  });
});

createOrder(cart)
  .then((orderId) => {
    // if we don't return a value from .then, the next chain won't receive that value
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    return showOrderSummary(paymentInfo);
  })
  .then((paymentInfo) => {
    updateWallet(paymentInfo);
  })
  .catch((err) => console.log(err))
  .then(() => console.log("No matter what happends I will be called"));
// CATCH will invoke if any of the top chain is failed

// When we write new Promise((res, rej) => {}), 
// the executor function which is passed to the promise does not run asynchronously. 

// Example:
console.log("start");
new Promise(() => {
  console.log("executor");
});
console.log("end");

// This code will run synchronously:
// O/P:
// start
// executor
// end

// --- PROMISE APIS ---
// PROMISE.ALL (actual syntax - Promise.all([]))
// Promise.all - used to make parallel api calls
// Promise.all takes input as array(iterable) of promises ---> Promise.all([p1, p2, p3])
// PASS SCENARIO - if all the promises are resolved then it returns array of result ---> [val1, val2, val3]
// ONE PR(p2) FAILED SCENARIO - as soon as anyone of the promise fails, then whole collection fails and returns error
// We cannot cancel promise in between as of now in JS

// PROMISE.ALLSETTLED (actual syntax - Promise.allSettled([]))
// To overcome this scenario - as soon as anyone of the promise fails, then whole collection fails and returns error
// What if we need results of other promises ---> Promise.allSettled 
// as soon as anyone of the promise fails, then will wait for all promises to settle
// [val1, err, val3] ---> p2 failed

// PROMISE.RACE (actual syntax - Promise.race([]))
// gives the value of 1st settled promise (either resolved or reject)

// PROMISE.ANY (actual syntax - Promise.any([]))
// gives the value of 1st resolved promise
// if every promise fails ---> returns aggregated error, [err1, err2, err3]