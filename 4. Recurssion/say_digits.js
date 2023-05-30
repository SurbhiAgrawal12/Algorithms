//**   Print all of the digits of a Number */

const sayDigit = (n) => {
  if (n == 0) {
    return;
  }
  let digit = n % 10;
  console.log(digit);
  n = Math.floor(n / 10);
  sayDigit(n);
};

//sayDigit(567);

const sayDigit2 = (n) => {
  if (n == 0) {
    return;
  }
  let digit = n % 10;
  sayDigit(Math.floor(n / 10));

  console.log(digit);
};

sayDigit2(567);
