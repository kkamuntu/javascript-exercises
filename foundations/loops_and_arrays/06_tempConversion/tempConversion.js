function roundToOneDecimalPlace(num) {
  return Math.round(num * 10) / 10;
}
const convertToCelsius = function(temp) {
  const celsius = (temp - 32) * 5/9;
  return roundToOneDecimalPlace(celsius);
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = (temp * 9/5) + 32;
  return roundToOneDecimalPlace(fahrenheit);
}; //test

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
