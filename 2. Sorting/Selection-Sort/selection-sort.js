//we have different rounds/passes
// select the smallest element and place it in the right place.
// ie i =0 pe smallest element ko place kar do round 1 me
// than round 2 me ie i = 1, remaining array ki sabse smallest element aana chahiye.
// same with i = 2 round 3
//same with i = 3 round 4
// round 5 , alreadyy sab sorted hoo gaye so we don't need round 5


// total rounds required is n-1, means first loop i wala i = 0 to i < n-1 tak jaega
// ie simpply two for loop lgana hai

let arr  = [56, 76, 1 , 8, 65, 89, 79];

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


for(let i = 0; i < arr.length-1; i++) {
    let minIndex = i;
    for(let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[minIndex]) {
            minIndex = j;   
        }
    }
    swap(arr, i, minIndex);
}

console.log("arr :: ", arr);
/*
Time complexity : 
round 1 : n times
round 2 : n-1 times
round 3 : n-2 times
round 4 : n-3 times
round n-1 : n- (n-1) = 1 time

so sum(round) = n+ n-1  + ... 1
means : 1+2+3+4+5.....+n  = n(n-1)/2 = O(n^2)

Best case : arr is alrdy sorted : but complexityy would be O(n^2)
Worst case: O(n^2)
use  case: if size of array is small

Space complexity: did we  take extra memory to sort this arr?
we  created only three variables, i, j , and minIndex
And jab bhi hum variable bnate hai hamari space complexity constant hoti hai
so space complexity : O(1)

Selection sort is stable or unstable?
Ans: It is unstable

A sorting algorithm is said to be stable if two objects with equal or same keys appear in the same order in sorted output as they appear in the input array to be sorted.

Input : 4A 5 3 2 4B 1
Output : 1 2 3 4B 4A 5

Stable Selection Sort would have produced
Output : 1 2 3 4A 4B 5
Selection sort works by finding the minimum element and then inserting it in its correct position by swapping with the element which is in the position of this minimum element. This is what makes it unstable.
Swapping might impact in pushing a key(let’s say A) to a position greater than the key(let’s say B) which are equal keys. which makes them out of desired order. 
In the above example 4A was pushed after 4B and after complete sorting this 4A remains after this 4B. Hence resulting in unstability.
Selection sort can be made Stable if instead of swapping, the minimum element is placed in its position without swapping i.e. by placing the number in its position by pushing every element one step forward. 
In simple terms use a technique like insertion sort which means inserting element in its correct place. 
*/
