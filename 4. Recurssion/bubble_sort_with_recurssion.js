const sortArray = (arr, n) => {

    //Base  case (Array is already sorted)
    if(n == 0 || n ==1) {
        return;
    }

    //processing - 1st case hum solve karenge, largest element ko end me paahuncha denge.
    for(let i = 0; i<n-1; i++) {
        if(arr[i] > arr[i+1]) {
            swap(arr, i, i+1);
        }
    }

    //baki case recurssion handle kar lega
    sortArray(arr, n-1);
}