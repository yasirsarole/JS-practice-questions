Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

function greet(age, city) {
  console.log(this.name, age, city);
}

const user = { name: "Yasir" };

const bound = greet.myBind(user, 25);
bound("Mumbai"); // Yasir 25 Mumbai
