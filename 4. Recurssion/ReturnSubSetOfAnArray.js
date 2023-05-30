/*
Problem: Given an integer array of length n, find and return all the subsets of input array.

Subsets are of length varrying from o to n, that contains elements of the array. But the order of
elements should remain same as  in the input array.

Note: the order of subsets are not important

Solution: if we have N number of elements inside an array,
we have exactly two choices for each of them, either we include that element in our subset 
or we do not include it. So, the take or not take strategy builds a pseudo-binary tree of choices 
returning only the leaves for each combination resulting in the powerset.

The recursion tree for the above example will look like this:

Note: 
Consider an array:
 {1,2,3,4}

Subarray: contiguous sequence in an array i.e.
{1,2},{1,2,3}

Subsequence: Need not to be contiguous, but maintains order i.e.
{1,2,4}

Subset: Same as subsequence except it has empty set i.e.
{1,3},{}

Given an array/sequence of size n, possible:
Subarray = n*(n+1)/2
Subseqeunce = (2^n) -1 (non-empty subsequences)
Subset = 2^n

*/

const returnSubset = (subset, inputArr, index, outputArr) => {
  if (index == inputArr.length) {
    subset.push(outputArr);
    return;
  }

  // Not Including Value which is at Index
  returnSubset(subset, inputArr, index + 1, [...outputArr]);
  // Including Value which is at Index
  outputArr.push(inputArr[index]);
  returnSubset(subset, inputArr, index + 1, [...outputArr]);
};

const main = () => {
  let subset = [];
  let input = [1, 2, 3];
  returnSubset(subset, input, 0, []);
  console.log("subset :: ", subset);
};
main();
