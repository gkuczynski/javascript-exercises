const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";

  if (num === 0) return 0;
  if (num === 1) return 1;

  let lastTwo = [0, 1];
  let sum = 1;
  for (let i = 2; i <= num; i++) {
    sum = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = sum;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
