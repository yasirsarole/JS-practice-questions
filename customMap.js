const arr = [1, 2, 3, 4, 5];
const callback = function (element) {
  return element * 2;
};

const check = arr.map(callback);
console.log("check===>", check);

Array.prototype.myMap = function (callback) {
  const arr = this;
  let result = [];

  arr.forEach((e, i) => {
    result.push(callback(e, i, arr));
  });

  return result;
};

const check2 = arr.myMap(callback);
console.log("check2===>", check2);
