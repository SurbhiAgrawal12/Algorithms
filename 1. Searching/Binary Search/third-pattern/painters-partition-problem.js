/*
Given an array/list of length N, where the array/listrepresents the  boards of 
each element of the given array/list represents the length of each board. 
Some "K" nummber of painters are available to paint these boards. 
Consider that each unit of a board takes 1 unit of time to paint.

You are supposed to return the area of the minimum time to get this job done of painiting 
all the n boards under a constraint that any painter will only paint the continous sections 
of boards.

*/

let arr = [10, 20, 30, 40]; // length of board
let k; // number of painters

const isPossible = (arr, k, mi) => {
  let avgSum = 0;
  let painterCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (avgSum + arr[i] <= mi) {
      avgSum = avgSum + arr[i];
    } else {
      painterCount++;
      if (painterCount > k || arr[i] > mi) {
        return false;
      }
      avgSum = 0;
      avgSum = avgSum + arr[i];
    }
  }
  return true;
};

const allocation = (arr, k) => {
  let totalTimeToPaintaBoard = arr.reduce((sum, each) => {
    return sum + each;
  }, 0); // ei

  let minTime = 0; //si
  let mi = minTime + (totalTimeToPaintaBoard - minTime) / 2;

  while (minTime <= totalTimeToPaintaBoard) {
    if (isPossible(arr, k, mi)) {
      ans = mi;
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
    mi = si + (ei - si) / 2;
  }
};
