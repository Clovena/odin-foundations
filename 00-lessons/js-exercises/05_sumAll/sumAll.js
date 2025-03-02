const sumAll = function (start, end) {
  if (
    // check that typeof is "number" for both start and end
    (typeof start != "number") |
    (typeof end != "number") |
    // check that both start and end are integers
    (start % 1 != 0) |
    (end % 1 != 0) | 
    // check that both start and end are positive 
    (start < 0) | 
    (end < 0)
  ) {
    // return 'ERROR' if not
    return "ERROR";
  } else {
    runningSum = 0;
    // define lower and upper numbers
    const upper = Math.max(start, end);
    const lower = Math.min(start, end);
    // then, iterate through range bounded by [upper, lower]
    for (i = lower; i <= upper; i++) {
      // calculate running total using +=
      runningSum += i;
    }
    return runningSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
