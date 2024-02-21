const convertToCelsius = function(fahrenheit) {
  let valueC = (fahrenheit - 32) * 5 / 9;
  //let value2 = value1 / 9;
  let roundedC = Math.round(valueC * 10) / 10;

  return roundedC;
};

const convertToFahrenheit = function(celsius) {
  let valueF = (celsius * 9 / 5) + 32;
  let roundedF = Math.round(valueF * 10) / 10;

  return roundedF;
};

const toC = convertToCelsius(32);
const toCOneDec = convertToCelsius(100);
const toCNegative = convertToCelsius(-100);
const toF = convertToFahrenheit(0);
const toFOneDec = convertToFahrenheit(73.2);
const toFNegative = convertToFahrenheit(-10);

console.log(toFNegative);


//Where I'm at - initial calculation isn't right; it's duplicating by 10 somewhere (before it's even done the rounding)

// ---------
// fahrenheit to celsius
// 
// C = 5/9 x (F-32)
//     Subtract 32 from the Fahrenheit temperature.
//     Multiply this number by five.
//     Divide the result by nine.

// celsius to farehnheit
//  Multiply the °C temperature by 1.8. Add 32 to this number. This is the answer in °F.

 // °F = (°C × 9/5) + 32 

// //
// celsius to fahrenheit




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
