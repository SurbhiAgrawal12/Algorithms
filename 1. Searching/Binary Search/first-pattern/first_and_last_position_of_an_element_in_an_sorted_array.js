/*
i.e. an array could have multiple duplicate values, for eg [1,1,1,2,2,3,3,4]
so first pposition of 2 element is 3 and last position of 2 element is 4.

ie left most occurence and right most occurence ka index  dena hai.

Note: we could apply binary search here cos array is sorted.
*/

//FirstOccurence means leftmost occurence
const firstOccurence = (arr, key) => {
  let si = 0;
  let ei = arr.length - 1;
  let mi = si + Math.floor((ei - si) / 2);
  let ans = -1;

  while (si <= ei) {
    if (arr[mi] == key) {
      ans = mi;
      //we need left most occurence, so we need to search in the left part after every successful iteration
      ei = mi - 1;
    } else if (arr[mi] > key) {
      ei = mi - 1;
    } else if (arr[mi] < key) {
      si = mi + 1;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return ans;
};

//rightmost occurence
const lastOccurence = (arr, key) => {
  let si = 0;
  let ei = mi - 1;
  let mi = si + Math.floor((ei - si) / 2);
  let ans = -1;

  while (si <= ei) {
    if (key == arr[mi]) {
      ans = mi;
      //we need right most occurence, so we need to search in the right part after every successful iteration
      si = mi + 1;
    } else if (key < arr[mi]) {
      ei = mi - 1;
    } else if (key > arr[mi]) {
      si = mi + 1;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return ans;
};

const main = () => {
  let arr = [1, 2, 2, 3, 3, 5];
  let key = 3;
  let leftMost = firstOccurence(arr, key);
  let rightMost = lastOccurence(arr, key);
  let totalNumberOfOccurenceOfKey = rightMost - leftMost + 1;
  console.log("leftMost :: ", leftMost);
  console.log("rightMost :: ", rightMost);
};

/**************** If array is not sorted ******************************/
/*
1. first occurence of string
2. longest string occurences
3.  last occurence of string 
*/

// let arr = [1,  3, 3, 2, 2, 5, 3, 3, 3];
// let leftMostIndex = -1;
// let rightMostIndex = -1;

// for(let i =0; i< arr.length; i++) {

// }
