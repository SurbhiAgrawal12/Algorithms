/*
Insertion Sort Algorithm
To understand insertion sort, let us first understand one analogy. 
Insertion sort is performed, just like we sort a deck of cards in any card game.

Suppose, you have a set of cards. Initially, you have one card in your hand. 
Now, you pick one of the cards and compare it with the one in your hand. 
If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. 
In the same way, you will take other unsorted cards and put them in their right place.

Working of insertion sort
1. Firstly, we assume that the first element is sorted, 
take the second element, and store it in a key variable.

2. Then, we are comparing the key with the first element,
if the first element is greater than the key, then the key is placed before the first element. 
Please note that we have 1 comparison and 1 swap in this iteration.

3. So, the first two elements are sorted. Similarly, 
we will perform this step for the third element and compare it with the elements 
on the left of it. We will keep on moving toward the left, till there is no element 
smaller than the 3rd element. Then, we will place the third element 
there(or at the beginning of the array, if it is the smallest element).
*/

//let arr = [5, 6, 1, 8, 9, 55, 78, 21, 98];
let arr = [3, 8, 1, 3, 45, 2, 10];

for (let i = 1; i < arr.length; i++) {
  let temp = arr[i];
  let j = i - 1;
  for (; j >= 0; j--) {
    //shift
    if (arr[j] > temp) {
      arr[j + 1] = arr[j];
    } else {
      break;
    }
  }
  // cos j-- ki wjh se j ek aage chla gya tha.
  arr[j + 1] = temp;
}

console.log("arr :: ", arr);
/*
It's a adaptable and stable algorithm
Use  when array is sort or partially sorted
Space  Complexity is O(1)
Time Complexity : O(n^2)
Best Complexity : O(n)
Worst Complexity : O(n^2)
The name "insertion sort" comes from the way that the algorithm sorts elements in the array by inserting each element into its proper position in a partially sorted list.
*/
