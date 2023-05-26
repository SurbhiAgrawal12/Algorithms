/*
Que: Given an arr of integer numbers, 
where arr[i] represents the number of pages in the ith book.
There are m number of students and the task is to allocate all the books to their students. 
Allocate books in such a way that.
1. each student gets at least one book.
2. each book should be allocated to a student.
3. book allocation should be in contigous manner.

You have to allocate  the book to m students such that the maximum number of pages
assigned to a student is minimum.

e.g.: lets conside n=4(number of books) and m =2 (number of students)
arr  = {10, 20, 30, 40}
ans: 
s1 { 10} , s2 {20, 30, 40} => max(10, 90) = 90
s1 {10, 20}, s2 {30, 40}  =>  max(30, 70) = 70
s1 { 10, 20, 30}, s2 {40} =>  max(60, 40) = 60
min(90, 70, 60) = 60

Hint: here might be possible, u are having an array and that array is not sorted, but here 
we can apply binary search, By specifying the SEARCH SPACE.

ie minimum number of pages we can alott is zero and 
maximum number of pages we  can alott is  sum of array.

ie here hamare ans ka search [0, 100] tak ja rha hai.
mid(0, 100) => 50
check  50 is  possible solution or not.
so 50 is not possible solution here, cos we  cannot diivide all  of the pages   
btwn 2 student, so isse kam bhi nahi kar paenge
so si = mid+1
so search space is now [51, 100]
mid = 75, 75 is one of the possible solution but in quetion it has been asked to 
allocate min number of pages, so will check in the left partt of 75
so ei = mid -1

conditions for possible solution:
1. alott on student ie student count should be initialize to 1
2. initially page number = 0, increase the page number till it reached mid value, 
3. if page number > mid, alott new student, ie student count++.
4. for new student initialize the page number to zero.
*/

const isPossible = (arr, n, m, mid) => {
  let studentCount = 1;
  let pageSum = 0;

  for (let i = 0; i < n; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum = pageSum + arr[i];
    } else {
      studentCount++;
      if (studentCount > m || arr[i] > mid) {
        return false;
      }
      pageSum = 0;
      pageSum = pageSum + arr[i];
    }
  }
  return true;
};

const allocation = (arr, n, m) => {
  let si = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
  }

  let ei = sum; // sum of all pages
  let ans = -1;
  let mid = si + Math.floor((ei - si) / 2); //minHieghestNumberOfPages

  while (si <= ei) {
    if (isPossible(arr, n, m, mid)) {
      ans = mid;
      ei = mid - 1; // ask to allocate min number of pages
    } else {
      si = mid + 1;
    }
    mid = si + Math.floor((ei - si) / 2);
  }
  return ans;
};
const main = () => {
  let numberOfBooks = 4;
  let numberOfStudents = 2;
  let pages = [10, 20, 30, 40];
  allocation(pages, numberOfBooks, numberOfStudents);
};
main();
