/*
Problem: A child is running up a staircase with with N  steps,
and can hop either 1 step, 2 steps or 3 steps at a Time. 
Implement a  method to count how many possible waysthe child can run up to the stairs.
You neen to return number of possible ways W.


Solution: Number of possible ways type of problems we can solve using recurssion.
We will work on small part and on large part  recurssion will work.

                     n = 10
                   1/  2|  3\
                   9    8    7  (recurssion)
                   X  + y  + z   = output

*/

/*input   n
return W
*/
const numberOfPossibleWays = (n) => {
  if (n == 0) {
    return 1; // If there are no steps, there is one possible way (reached the top)
  } else if (n < 0) {
    return 0; // If there are negative steps, it's not a valid path
  }
  let x = numberOfPossibleWays(n - 1);
  let y = numberOfPossibleWays(n - 2);
  let z = numberOfPossibleWays(n - 3);

  return x + y + z;
};

const W = numberOfPossibleWays(2);
console.log(W);

/**
 * We have two base cases:
 * 1. If the number of steps N is 0, we return 1 because the child has reached the top of the
 *    stairs (there is one possible way).
 * 2. If the number of steps N is negative, we return 0 because it's not a valid path.
 *
 * Note: Note that this approach has an exponential time complexity since it explores all
 * possible combinations. For larger values of N, it may be more efficient to use dynamic
 * programming techniques to avoid redundant calculations.
 */
