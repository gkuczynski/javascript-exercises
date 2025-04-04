const removeFromArray = function (array, ...params) {
  for (let i = 0; i < params.length; i++) {
    if (array.includes(params[i])) {
      while (array.includes(params[i])) {
        array.splice(array.indexOf(params[i]), 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
