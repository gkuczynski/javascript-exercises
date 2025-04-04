const convertToCelsius = function (temperature) {
  if (temperature == 32) {
    return 0;
  } else {
    const convertedTemp = ((temperature - 32) * 5) / 9;
    return Math.round(convertedTemp * 10) / 10;
  }
};

const convertToFahrenheit = function (temperature) {
  const convertedTemp = temperature * 1.8 + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
