

const merge = (arr, si, ei)  => {
    let mergedArray = [];
    let mi = Math.floor((si+ei)/2);
    let k = 0;
    let i = si; 
    let j = mi+1;
    console.log("mergedArray :: ", mergedArray);

    while(i<=mi && j<=ei) {
        if(arr[i] < arr[j]) {
            mergedArray[k]  = arr[i];
            i++; k++;
        }else {
            mergedArray[k]  = arr[j];
            k++; j++
        }
    }

    while(i<=mi) {
        mergedArray[k]  = arr[i];
            i++; k++;
    }

    while(j<=ei) {
        mergedArray[k]  = arr[j];
            k++; j++;
    }

    let m =  0
    for(let i = si; i<=ei; i++) {
        arr[i]  = mergedArray[m];
        m++;
    }
}

const mergeSort = (arr, si, ei) => {
    //0, 8 = > 4

    if(si>=ei) {
        return;
    }

    let middleindex = Math.floor((si+ei)/2);
    console.log("si :: ", si, "ei :: ", ei, "middleindex :: ", middleindex);
    mergeSort(arr, si, middleindex); // 0, 4
    mergeSort(arr, middleindex+1, ei); // 5, 8
    merge(arr, si, ei); // 0, 8
}

const main = () => {
    
    let arr = [5, 6, 1, 8, 9 ,55 ,78, 21, 98 ];
    let startIndex = 0;
    let endIndex = arr.length-1; //  8
    mergeSort(arr, startIndex, endIndex);
    console.log("arr :: ", arr);
}

main()


//space complexity : O(n)
// solve inversion count
// time complexity : O(nlogn)
