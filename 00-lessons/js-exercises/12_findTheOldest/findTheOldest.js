const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (obj) {
  return obj.reduce((older, current) => {
    const olderAge = getAge(older.yearOfBirth, older.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return olderAge < currentAge ? current : older;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
