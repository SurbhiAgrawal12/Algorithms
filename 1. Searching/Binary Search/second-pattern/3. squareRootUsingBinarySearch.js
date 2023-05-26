/**
 * Here we will use conncept of seraching space for eg, sqrt(25), will surely lie btwn [0,25]
 * same with others
 */

const sqrt = (n) => {
  let si = 0;
  let ei = n;
  let mi = si + Math.floor((ei - si) / 2);
  let ans;

  while (si <= ei) {
    let square = mi * mi;
    if (square == n) {
      return mi;
    } else if (square < n) {
      ans = mi;
      si = mi + 1;
    } else {
      ei = mi - 1;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return ans;
};

//use  bruteforce for precision
const morePrecision = (n, precision, integerSol) => {
  let factor = 1;
  let decimalPreciseAns = integerSol;
  for (let i = 0; i < precision; i++) {
    factor = factor / 10;
    for (let j = decimalPreciseAns; j * j < n; j = j + factor) {
      decimalPreciseAns = j;
    }
  }
  return decimalPreciseAns;
};

// Example usage
const number = 20;
const precision = 0.00001;
const squareRoot = sqrt(number);
const decimalPreciseAns = morePrecision(number, precision, squareRoot);
console.log("The integer square root is:", squareRoot);
console.log("The square root is:", decimalPreciseAns);
