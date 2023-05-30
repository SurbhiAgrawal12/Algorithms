let arr = [2, 4, 6, 10, 14, 16];

const binarySearch = (arr, si, ei, key) => {
    //Base case
    
        //element not found
        if(si > ei) {
            return false;
        }

        //element found
        let mid = si + Math.floor((ei-si)/2);
        if(arr[mid] == key) {
            return true;
        }

    // recursive relation
    if(arr[mid] < key) {
        //right part me jana hai
        return binarySearch(arr, mid+1, ei, key);
    }else {
        return binarySearch(arr, si, mid-1, key);
    }
}