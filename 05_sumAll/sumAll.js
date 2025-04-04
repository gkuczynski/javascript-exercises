const sumAll = function (numA, numB) {
  if (typeof numA != "number" || typeof numB != "number") {
    return "ERROR";
  }

  if (numA < 0 || numB < 0) {
    return "ERROR";
  }

  if (Math.floor(numA) != numA || Math.floor(numB) != numB) {
    return "ERROR";
  }

  let sum = 0;
  let higherNum, lowerNum;
  if (numA > numB) {
    higherNum = numA;
    lowerNum = numB;
  } else {
    higherNum = numB;
    lowerNum = numA;
  }

  for (let i = lowerNum; i <= higherNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
