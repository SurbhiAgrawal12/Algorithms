const Fibonacci = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let ans = Fibonacci(n - 1) + Fibonacci(n - 2);
  return ans;
};
console.log("Fibonacci ::  ", Fibonacci(4));

/**
 * The Fibonacci series is a sequence of numbers in which each number is the sum of the two
 * preceding ones, usually starting with 0 and 1. The sequence begins as follows: 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.


Mathematically, the Fibonacci series is defined by the recurrence relation:
F(n) = F(n-1) + F(n-2),
where F(0) = 0 and F(1) = 1.
 */
