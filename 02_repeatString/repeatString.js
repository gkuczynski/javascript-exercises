const repeatString = function (string, count) {
  let startingString = "";

  if (count < 0) {
    return "ERROR";
  }

  for (let i = 0; i < count; i++) {
    startingString += string;
  }
  return startingString;
};

// Do not edit below this line
module.exports = repeatString;
