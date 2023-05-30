function merge(arr1, arr2) {
 let i = 0;
 let j = 0;
 let results = [];
 while(i < arr1.length && j < arr2.length) {
  if (arr2[j] > arr1[i]) {
   results.push(arr1[i]);
   i++;  
  }else {
   results.push(arr2[j])
  }
 }
 while(i < arr1.length){
  results.push(arr1[i]);
  i++;
 }
 while(j < arr2.length){
  results.push(arr2[j]);
  j++;
 }
 return results
}

function mergeSort(arr){
 if (arr.length <= 1) return arr;
 
 let mid = Math.floor(arr.length/2);
 let left = mergeSort(arr.slice(0, mid));
 let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const main = () => {
    
    let arr = [5, 6, 1, 8, 9 ,55 ,78, 21, 98 ];
    
    let sortedArr = mergeSort(arr);
    console.log("arr :: ", sortedArr);
}

main()