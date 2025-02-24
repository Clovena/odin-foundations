const removeFromArray = function (input, ...remove) {

  let trim = [];
  let i = 0;

  input.forEach((elem) => {
    if (!remove.includes(elem)) {
      trim.push(elem);
    }
  });

  return trim;
};

// Do not edit below this line
module.exports = removeFromArray;
