const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  const years = arr
  .map((person) => person.yearOfDeath ? person.age = person.yearOfDeath - person.yearOfBirth: person.age = currentYear - person.yearOfBirth)
  
  let oldest = arr[0];
  arr.filter((person) => person.age > oldest.age ? (oldest.age = person.age, oldest.name = person.name) : oldest.age = oldest.age)
  
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
