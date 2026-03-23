function myInterval(callback, delay) {
  let timer;

  function run() {
    timer = setTimeout(() => {
      callback();
      run();
    }, delay);
  }

  run();

  return {
    clear() {
      clearTimeout(timer);
    },
  };
}
