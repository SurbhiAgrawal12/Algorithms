let arr = [3, 2, 1, 5, 6];

const sumOfAnArray = (arr, n) => {
  console.log("n :: ", n);
  //Base case
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return arr[n - 1];
  }

  console.log("arr[n-1] :: ", arr[n - 1]);
  console.log("arr[n-2] :: ", arr[n - 2]);
  let sum = arr[n - 1] + arr[n - 2];
  console.log("sum :: ", sum);
  sum = sum + sumOfAnArray(arr, n - 2);
  console.log("final sum :: ", sum);
  return sum;
};

console.log(sumOfAnArray(arr, arr.length));

/******* Another Approach *************/
function arraySum(arr, index = 0) {
  // Base case: If index reaches the end of the array, return 0
  if (index === arr.length) {
    return 0;
  }

  // Recursive case: Add the current element to the sum of the remaining elements
  return arr[index] + arraySum(arr, index + 1);
}

// Example usage
const array = [1, 2, 3, 4, 5];
const sum = arraySum(array);
console.log("The sum of the array is:", sum);
