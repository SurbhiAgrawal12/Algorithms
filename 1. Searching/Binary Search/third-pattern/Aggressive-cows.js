/*
Givenn an array of length N, where each element denotes the position of a stall.
Now you have "N" stalls and an integer "K" which denotes the number of cows 
that are aggressive.
To prevent the cows from hurting each other, you need to assign the cows to the stalls,
such that the minimum distance between any two of them is as large as possible.
Return the largest minimum distance.
let arr = [10, 20, 30, 40]

**********************************************************
[4, 2, 1, 3, 6]
 c1|c2 => distance btwn two cows = 2
 c1   |c2 => distance btwn two cows = 3
 c1      |c2 => distance btwn two cows = 1 
 c1         |c2 => distance btwn two cows = 2
    c1|c2 => distance btwn two cows = 1
    c1    |c2 => distance btwn two cows  = 1
    c1      |c2 => distance btwn two cows = 4
       c1|c2 => distance btwn two cows = 1
       c1   |c2 => distance btwn two cows = 5
          c1|c2 => distance btwn two cows = 3
so, max of min distance is 5      
**************************************************************
use searching space approach
1. min length =0;
2. max length = max(arr) - min(arr)
3. find mid, check if mid is possible solution or not? (ie let say mid 2 aaya , so 2 k distance me hum cow ko place kr sakte kya?)
4. if it is possible, greater than mid would be possible solution ( ie agar cow 2 k distance pe nahi ladi toh 3 ya 4 ya 5 k distance pe bhi nahi ladengi)
5. and less than mid will not be a possible solution
possible solution means difference btwn two arr position (  stalls) is greater than mid or not?

*/
let isPossible = (arr, k, mid) => {
  let cowCount = 0;
  let lastPosition = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - lastPosition >= mid) {
      cowCount++;
      if (cowCount == k) {
        return true;
      }
      lastPosition = arr[i];
    }
  }
  return false;
};
let aggressiveCows = (arr, k) => {
  arr.sort((a, b) => {
    return a - b;
  });
  let si = 0;
  let maximum = -1;
  for (let i = 0; i < arr.length; i++) {
    maximum = Max(maximum, arr[i]);
  }
  let ei = maximum;
  let ans = -1;
  let mid = si + (ei - si) / 2;
  while (si <= ei) {
    /*
        store the distance in ans, if the arrangement is possible
        and update the low to search for greater distance
        otherwise, update the high to search for lower distance.
    */
    if (isPossible(arr, k, mid)) {
      ans = mid;
      si = mid + 1;
    } else {
      ei = mid - 1;
    }
    mid = si + (ei - si) / 2;
  }
  return ans;
};
