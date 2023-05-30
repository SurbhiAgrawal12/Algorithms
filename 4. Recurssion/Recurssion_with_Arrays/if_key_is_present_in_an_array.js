const findKey = (arr, n, k) => {

    //Base case
    if(n == 0) {
        return false;
    }
    /** n==1 base case is not required, it would be coverd in processing statement. */
    // if( n ==1 && arr[n-1] == key) {
    //     return true;
    // }

    if(arr[n-1]  == key) {
        return true;
    }else {
        return findKey(arr, n-1, k);
    }
}

let arr = [3,5,1,2,6];
let key = 2;
console.log(findKey(arr, arr.length, key));