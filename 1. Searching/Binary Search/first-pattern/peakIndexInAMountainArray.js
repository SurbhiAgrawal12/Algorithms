/*
left part of mountain array : arr[i] < arr[i+1]
right   part of mountain array : arr[i+1] < arr[i]
peak = arr[i-1] < arr[i] > arr[i+1]

Note: We need to find peak of mountain array.

will check arr[mid] < arr[mid+1] -> means mid lies on left part shift si = mid+1
if(arr[mid] > arr[mid+1]) -> means mid lies on right part shift ei = mid -1 
*/

const peak = (arr) => {
  let si = 0;
  let ei = arr.length - 1;
  let mi = si + Math.floor((ei - si) / 2);
  let ans = -1;

  while (si <= ei) {
    if (arr[mi] > arr[mi - 1] && arr[mi] > arr[mi + 1]) {
      ans = mi;
    } else if (arr[mi] < arr[mi + 1]) {
      si = mi + 1;
    } else if (arr[mi] > arr[mi + 1]) {
      ei = mi - 1;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
};
