/**
 * In a sorted and rotated array, we  have to decide in which line we should apply binary search
 * from both of the two parralel lines.
 * If we will draw sorted and rotated array in a graph two parallel lines would get drawn
 * so we have start index and we have end index,
 * and will calculate pivot.
 * search element lies btwn pivot and last index if yest apply binary search in second line
 * else in first line.
 * will consider the pivot to be smallest element.
 *
 * complexity : O(logn) + O(logn) = O(logn)
 */
const getPivot = (arr, si, ei) => {
  let mi = si + Math.floor((ei - si) / 2);

  while (si < ei) {
    // arr[si] will always be greater than arr[pi],  if arr[mi] > arr[si] means mid lies on first line
    if (arr[mi] > arr[si]) {
      si = mi + 1;
    } else {
      ei = mi;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return mi;
};

const BinarySearch = (arr, si, ei, target) => {
  let mi = si + Math.floor((ei - si) / 2);
  let ans = -1;
  while (si <= ei) {
    if (target == arr[mi]) {
      ans = mi;
      return ans;
    } else if (target > arr[mi]) {
      si = mi + 1;
    } else {
      ei = mi - 1;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return ans;
};

const searchTargetIndex = (arr, target) => {
  let si = 0;
  let ei = arr.length - 1;

  console.log("arr :: ", arr);
  console.log("target :: ", target);
  let pivotIndex = getPivot(arr, si, ei);
  console.log("pivotIndex :: ", pivotIndex);

  if (target <= arr[ei] && target >= arr[pivotIndex]) {
    return BinarySearch(arr, pivotIndex, ei, target);
  } else {
    return BinarySearch(arr, si, pivotIndex - 1, target);
  }
};

let result = searchTargetIndex([7, 9, 1, 2, 3], 9);
console.log("result :: ", result);
