// compare only neighbour elements and swap them
// round 1 me two pointers le lo ek i = 0 and next element right of 0th element.
// ese karte2 largest element apni correct position me fit ho jaega that is apne last position pe.
// same with round 2 n all
// so automatically first element apni correct position pe aa chuka hoga so hume first element k liye
// iterarte karne ki jarurat ni hogi.
// so total n-1 round honge.

// So inshort hum ith round me ith largest element ko uski correct position pe pahuncha dete ho.

const swap = (arr, m, n) => {
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
};

for (let i = 0; i < arr.length - 1; i++) {
  //round 1
  let swapped = false;
  for (let j = 0; j < arr.length - i - 1; j++) {
    // 1st iteration of an array

    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      swapped = true;
    }
  }

  if (swapped == false) {
    //already sorted
    break;
  }
}

// j ko humne arr.length-1 tak rkha hai cos hum j+1 se compare karwa rahe hai,
// so last lement pe wo index k bahar chale jaega isly.

/*
Time Complexity: 
 ye rounds second loop complete kar  rha hai so j bhi n-i tak trvl karega, 
 but i humne 0 se start kiya hai isly j = n-i-1 tak jaega
round 1 : 0 - (n-1)
round 2 : 0 - (n-2)
round 3 : 0 - (n-3)

round n-1 : 0 - (n-(n-1)) => 0 - 1

sum(rounds) = 1+2+3+4.....(n-1)

(n-1)(n)/2 =>  => O(n^2) 

Space Complexity:
O(1)
Best complexity: ie array alrdy sorted hai
so first round me hi check kr lo agar ek bhi swap nahi hua hai toh array alrdy sorted hai
means srf 1 iteration hoga array ka, means complexity would be O(n)

worst case: reverse sorted array ho : O(n^2)
Bubble sort i sstable or not?
is bubble sort Inplace sort?
ans: Yes
Inplace sort : A sort algorithm in which the sorted items occupy the same storage as the original ones. These algorithms may use o(n) additional memory for bookkeeping, but at most a constant number of items are kept in auxiliary memory at any time. Also known as sort in place.
Yes, bubble sort is a stable algorithm

Yes, Bubble Sort is a stable sorting algorithm. We swap elements only when A is less than B. If A is equal to B, we do not swap them, hence relative order between equal elements will be maintained. Look at the picture below and keep an eye out for the ordering of 23 and 23*. Note how the original order of these elements is retained throughout the sorting process. The relative positioning of 23 and 23* does not change in the sorted output.
it is not very efficient for large arrays
the algorithm "bubbles" the smaller elements up to the top by repeatedly swapping adjacent elements.
This process is similar to the way that bubbles rise to the surface of a liquid, hence the name "bubble sort".
*/
