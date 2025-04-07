const palindromes = function (str) {
  let cleanedUp = str.split("");
  const chars = "1234567890qwertyuiopasdfghjklzxcvbnm";

  cleanedUp = cleanedUp
    .map((letter) => letter.toLowerCase())
    .filter((letter) => chars.includes(letter))
    .join("");

  return cleanedUp === cleanedUp.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
