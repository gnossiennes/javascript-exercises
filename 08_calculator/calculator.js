const add = function(a,b) {
  return a + b;	
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  const initialValue = 0;
  const totalValue = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
    );
  return totalValue;
};

const multiply = function(array) {
  const totalValue = array.reduce((a, b) => a * b, 1)
  return totalValue;
};

const power = function(a,power) {
	return a ** power;
};

const factorial = function(a) {
	// create array of number
  const array = [];
  for (let i = 1; i <= a; i++) {
    array.push(i);
  }
  // factorializing with reduce
  const initialValue = 1;
  const totalValue = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue
  )
  return totalValue;
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
