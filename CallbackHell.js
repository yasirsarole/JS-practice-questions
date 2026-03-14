// CALLBACK can be used to run async code
// Below is the example of an e-commerce website, using cb functions
// E-commerce website has to follow below steps, one after the other, once items has been added to CART
// CreateOrder
// ProceedToPayment
// showOrderSummary
// updateWallet

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

// Once the code starts to grow horizontally instead of vertically, THIS IS CALL CALLBACK HELL // PYRAMID OF DOOM

// INVERSION OF CONTROL
// This is another problem while using callbacks
