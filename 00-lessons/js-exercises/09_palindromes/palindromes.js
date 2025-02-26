const alphaNumeric = function (str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};

const palindromes = function (str) {
  let strClean = alphaNumeric(str).toLowerCase();
  let arr = strClean.split('');
  arrBackwards = arr.slice().reverse().join('');
  return arr.join('') === arrBackwards;
};

// Do not edit below this line
module.exports = palindromes;
