/**
 * Pivot: minimum element of the graph is pivot
 * if  we will plot graph of rotated array, eventually we will draw two parallel lines.
 * will find mid index.
 * if mid index lies on first line ( that means arr[mid] >= arr[0])
 * if mid index lies on second line ( that means arr[mid] <= arr[ei])
 * if mid index lies on pivot element (that means arr[mid] < arr[mid-1] && arr[mid] < arr[mid+1])
 * on the basis of above condition we can shift our ei to mid instead of mid -1, cos pivot will alys lie on second line.
 */

let arr = [7, 9, 1, 2, 3];

const getPivot = (arr) => {
  let si = 0;
  let ei = arr.length - 1;
  let mi = si + Math.floor((ei - si) / 2);

  //si and ei are indexes, so si would alys be less than ei
  while (si <= ei) {
    if (arr[mi] >= arr[si]) {
      si = mi + 1;
    } else if (arr[mi] <= arr[ei]) {
      ei = mi;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return si; //return e { anything is fine cos s or e would be same in this case}
};
/**********Another way to solve *******************************************/
function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // Check if the middle element is the pivot
    if (arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    }

    // Check if the start and middle elements are sorted
    if (arr[start] <= arr[mid]) {
      start = mid + 1; // The pivot is in the second half
    } else {
      end = mid; // The pivot is in the first half
    }
  }

  // If no pivot is found, the array is not rotated
  return arr[0];
}

// Example usage
const array = [4, 5, 6, 7, 0, 1, 2];
const pivot = findPivot(array);
console.log("The pivot element is:", pivot);
