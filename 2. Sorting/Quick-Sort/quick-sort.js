/*
Approach:
1. Pick any number from array.
2. keep that number to its right position in array.
3. then make sure, every element on the left of that number will be smaller than that number.
4. And every element on the right of that number will be greater than that number.


There are four ways to choose the pivot:
    1. Consider the first element as the pivot.
    2. Consider the last element as the pivot.
    3. Consider any random element as the pivot.
    4. Use the Median of 3 methods. 
*/

/*
 partition() function is doing all of the work
 1. Pick pivot element
 2. Count all elements less than pivot.
 3. Move Pivot at position (si+count of smaller elements)
 4. Swap elements of left and right part of Pivot.

Step 1: Choose the pivot following any of the four methods (the last element is commonly used as the pivot).
Step 2: Assign the counter i to the leftmost element’s index and the counter j to the rightmost element’s index, excluding the counter.
Step 3: If i is less than j, proceed.
Step 4: If the element in position i is less than the pivot, increment i.
Step 5: If the element in position j is greater than the pivot, decrement j.
Step 6: If the element in i is greater than the pivot and the element in position j is less than the pivot, swap the elements in i and j.
Step 7: If i is greater than j, swap the element in position i and the pivot.
Step 8: Continue the process for the left and the right partitions formed.
*/

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, si, ei) => {
  let pivot = arr[ei]; // choosen the last element as pivot
  let i = si - 1; //leftmostIndex
  for (j = si; j <= ei - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, j);
  return i + 1;
};

/*
quickSort function simply sort the array using start index or end index
    1. write base case if start index  is greater than end index than array is either an empty array or having only one element
    2. Calculate the position of pivot. by calling partitiion function
    3. call the quicksort on left part of pivot position
    4. call the quicksort on right part of pivot position

partition() function is doing all of the work
  1. Pick pivot element
  2. Count all elements less than pivot.
  3. Move Pivot at position (si+count of smaller elements)
  4. Swap elements of left and right part of Pivot.

Step 1: Declare a function with three parameters, an array (say arr) and two integer type variables (say i and j).
Step 2: If arr[i] < arr[j], partition the array between arr[i] and arr[j].
Step 3: Recursively call the function with three parameters, an array (arr) and two integers (i and (partition position - 1)).
Step 4: Recursively call the function with three parameters, an array (arr) and two integers ((partition position + 1), j).
*/
const quickSort = (arr, si, ei) => {
  //Base  case
  if (si >= ei) {
    return;
  }

  let positionOfPivot = partition(arr, si, ei);
  quickSort(arr, si, positionOfPivot - 1);
  quickSort(arr, positionOfPivot + 1, ei);
};

const main = () => {
  let arr = [5, 6, 1, 8, 9, 55, 78, 21, 98];
  let startIndex = 0;
  let endIndex = arr.length - 1; //  8
  quickSort(arr, startIndex, endIndex);
  console.log("arr :: ", arr);
};

main();

/**
 * Average  time complexity is O(nlogn)
 * Best time complexity is O(nlogn)
 * worst time complexity is O(n^2)
 * inplace sorting algorithm
 * not stable algorithm
 * Quicksort is generally not a stable sorting algorithm, meaning that it does not guarantee to preserve the relative order of equal elements in the input array.
 * The reason for this is that Quicksort uses a partitioning step to divide the input array into two sub-arrays based on a pivot element. During this step, elements that are equal to the pivot can be placed in either sub-array, depending on the implementation.
 *  This can cause the relative order of equal elements to change.
 * Yes, Quick Sort is an in-place sorting algorithm. This means that it operates directly on the input array, without requiring additional memory or storage space. During the sorting process, Quick Sort rearranges the elements of the input array by swapping them in place, rather than creating a new array or using auxiliary memory.
 The space complexity of Quick Sort is O(log n) on average and O(n) in the worst-case scenario, where n is the size of the input array.
 The worst-case time complexity of Quick Sort is O(n^2) when the input array is already sorted or nearly sorted in either ascending or descending order. In this scenario, the pivot selection process can cause Quick Sort to make many comparisons and swaps, leading to a quadratic time complexity.

Specifically, if the pivot element is chosen to be the smallest or largest element of the sub-array, each partitioning step will only reduce the size of the sub-array by one element. This results in a partitioning process that takes O(n) time for each level of recursion, leading to a worst-case time complexity of O(n^2) when the recursion depth is n.
*/
