const alphaNumeric = function (str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};

const palindromes = function (str) {
  let strClean = alphaNumeric(str);
  let arr = split(strClean, '');
  return arr === arr.reverse();
};

// Do not edit below this line
module.exports = palindromes;
