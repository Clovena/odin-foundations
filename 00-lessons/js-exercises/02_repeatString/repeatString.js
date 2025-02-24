const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let rep = "";
    for (let i = 0; i < num; i++) {
      rep += `${str}`;
    }
    return rep;
  }
};

// Do not edit below this line
module.exports = repeatString;
