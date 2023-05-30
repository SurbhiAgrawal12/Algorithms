/**
 * How to use binary search with recurssion
 * arr[2,4,6,9,11,13], find out this array is sorted or not?
 * agar koi array hai jisme srf ek hi element rkha hua hai, means wo already sorted hai.
 */

let arr = [2, 4, 6, 9, 15, 13];

/** linear Search */
const isSorted = (arr, n) => {
  //Base case
  if (n == 0 || n == 1) {
    return true;
  }

  if (arr[n - 2] > arr[n - 1]) {
    return false;
  } else {
    return isSorted(arr, n - 1);
  }
};

console.log(isSorted(arr, arr.length));
