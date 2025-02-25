const roundToTenths = function (number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function (temp) {
  let celsius = (temp - 32) * (5 / 9);
  return roundToTenths(celsius);
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (temp * 9 / 5) + 32;
  return roundToTenths(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
