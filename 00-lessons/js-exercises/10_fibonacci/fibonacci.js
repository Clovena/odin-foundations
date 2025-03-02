const fibonacci = function (step) {
  const START_ARRAY = [1, 1];
  let index = +step - 1;

  if (index < 0) {
    return 'OOPS';
  } else if (index === 0) {
    return 0;
  } else if (index < 2) {
    return 1;
  } else {
    arr = START_ARRAY;
    while (index > arr.length) {
      arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
    }
    return arr[arr.length];
  }
};

// Do not edit below this line
module.exports = fibonacci;
