// Debounce in JavaScript ensures a function runs only after a certain amount of time has passed since the last call.

function debounce(func, wait) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
