const reverseString = function (str) {
  let reversedString = "";

  if (str.length === 0) {
    return "";
  }

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
