const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, elem) => {
    return total + elem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, elem) => {
    return total * elem;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
