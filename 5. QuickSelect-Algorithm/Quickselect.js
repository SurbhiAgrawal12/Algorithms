/*
Quickselect is a selection algorithm to find the k-th smallest element in an unordered list. 
It is related to the quick sort sorting algorithm.
*/

/*
Quickselect is a selection algorithm that can find the kth smallest element in an unsorted array in expected linear time (O(n)). It is similar to quicksort, which is a sorting algorithm that also uses partitioning, but quickselect only focuses on the partition that contains the desired kth element, rather than sorting the entire array.

Here's how the algorithm works:

Choose a pivot element from the array (typically chosen randomly).
Partition the array into two subarrays: one containing all elements smaller than the pivot, and one containing all elements larger than the pivot.
If the index of the pivot element in the sorted array is equal to k-1 (since arrays are zero-indexed), return the pivot element.
If the index of the pivot element is greater than k-1, recursively call the algorithm on the subarray containing the smaller elements.
If the index of the pivot element is less than k-1, recursively call the algorithm on the subarray containing the larger elements, but with k shifted by the number of elements in the smaller subarray.
By recursively selecting and partitioning subarrays, the algorithm can eliminate half of the remaining elements each time, making it very efficient for finding the kth smallest element in an unsorted array.

It's worth noting that the worst-case time complexity of quickselect is O(n^2), which occurs when the pivot is always chosen poorly (e.g. the smallest or largest element), causing the subarray sizes to not be balanced. However, in practice, the algorithm performs very well and is often used as a building block for more complex algorithms.
*/
