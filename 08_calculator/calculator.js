const add = function (numA, numB) {
  return numA + numB;
};

const subtract = function (numA, numB) {
  return numA - numB;
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => total * current, 1)
};

const power = function (numA, numB) {
  return numA ** numB;
};

const factorial = function (num) {
  if(num === 0) return 1;
  let sum = 1;
  for(let i = 1; i <= num; i++){
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
