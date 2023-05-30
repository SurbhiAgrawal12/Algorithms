/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargestSecondApproach = function(nums, k) {
    let sortArr = nums.sort((a,b) => {
        return(a-b);
    });
    return sortArr(k-1); //kth element would be at k-1 index
    
};

/*
But if interviewer asked you to not to use sort inbuilt function than:
use quickselect  algorithm
*/

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const partition = (arr, si, ei) => {
    let pivot = arr[ei]; // choosen the last element as pivot
    let i = si-1; //leftmostIndex
    for (j = si; j <= ei- 1; j++){
        if (arr[j] < pivot){
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, j);
    return (i + 1);
}

const main = (arr, k , si, ei) => {
    let partitionIndex = partition(arr, si, ei);
    if((k-1) == partitionIndex) {
        return arr[partitionIndex];
    }else if( (k-1) < partitionIndex) {
       return main(arr, k , partitionIndex+1, ei )
    }else {
       return main(arr, k , si, partitionIndex-1);
    }
}

var findKthLargest = function(nums, k) {
    let si = 0;
    let ei = arr.length-1;
    let kthElement = main(nums, k, si, ei);
    console.log("kthElement  :: ", kthElement);
    return kthElement;
}




const test = () => {
    
    let arr = [3,2,1,5,6,4 ];
    let k = 2;
   
    console.log(findKthLargest(arr, k));
    
}

test()