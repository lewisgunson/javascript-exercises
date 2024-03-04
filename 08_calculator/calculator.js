const add = function(add1, add2) {
	let addResult = add1 + add2;
  return addResult;
};

const subtract = function(sub1, sub2) {
	let subtractResult = sub1 - sub2;
  return subtractResult;
};

const sum = function(arr) {
	sumArr = arr.reduce((a, b) => a + b, 0)
  return sumArr
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function(pow1, pow2) {
  return Math.pow(pow1, pow2);
}

const factorial = function(f) {
let result = 1

	if (f < 2) {
    return result;
  } else {
    for (let i = 1 ; i <= f ; i++) {
      result *= i;
    }  
  }
  return result;
};

const addZeroes = add(0, 0);
const addTwos = add(2, 2);
const addPositiveNums = add(2, 6);
const subtractNumbs = subtract(10, 4);
const sumEmpty = sum([]);
const sumOneNum = sum([7]);
const subTwoNum = sum([7, 11]);
const sumManyNums = sum([1, 3, 5, 7, 9]);
const multiTwo = multiply([2 , 4]);
const multiSeveral = multiply([2, 4, 6, 8, 10, 12, 14]);
const powerTo = power(4, 3);
const fZero = factorial(0);
const fOne = factorial(1);
const fTwo = factorial(2);
const fFive = factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
