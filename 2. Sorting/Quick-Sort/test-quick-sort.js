/*
partition() function is doing all of the work
1. Pick pivot element
2. Count all elements less than pivot.
3. Move Pivot at position (si+count of smaller elements)
4. Swap elements of left and right part of Pivot.
*/

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const partition = (arr, si, ei) => {
    let pivot = arr[ei]; // choosen the last element as pivot
    console.log("pivot :: ", pivot);
    let j = si;
    let count = 0;
    while(j<ei) {
        if(arr[j] < pivot) {
            count++;
        }
        j++;
    }
    console.log("count :: ", count);
    let pivotIndex = si  + count;
    swap (arr, pivotIndex, ei);
    console.log("arr :: ", arr);

    count = 0;
    let i = si;
    let k = pivotIndex + 1;
    while(i< pivotIndex-1 && k < ei) {
        if(arr[i] > pivot && arr[k] < pivot) {
            swap(arr, i, k);
            i++; k++;
        }if(arr[i] < pivot) {
            i++;
        }if(arr[k] > pivot) {
            k++;
        }
    }

    console.log("arr 2 :: ", arr);


}

const main = () => {
    
    let arr = [5, 6, 1, 8, 98,  9 ,55 ,78, 21  ];
               
    let startIndex = 0;
    let endIndex = arr.length-1; //  8
    partition(arr, startIndex, endIndex);
    console.log("arr :: ", arr);
}

main()


/*
const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return;
}

const selectPivot = (arr, si , ei) => {

    //select pivot
    let pivot = arr[ei];
    let pivotIndex = ei;

    let countNumberOfElementsLessThanPivot = 0;

    for(let k = si; k<ei; k++) {
        if(arr[k] < pivot){
            countNumberOfElementsLessThanPivot++;
        }
    }

    //shift pivot to its correct index (according to sorted  array)
    let pvi = si+countNumberOfElementsLessThanPivot;
    swap(arr,pvi, pivotIndex );

    // sort the left and right part of pivot
    let p = si; let q = ei;
    while(p < pvi  && q > pvi) {
        if(arr[p] < arr[q]) {
            p++;
        }else if(arr[q] < arr[p]) {
            swap(arr, p, q);
            p++; q--;
        }
    } 

    return pvi;

}

const quickSort = (arr, si , ei) => {

    //base case
    if(si>=ei) {
        return;
    }

    let positionOfPartion = selectPivot(arr, si , ei);
    quickSort(arr, si, positionOfPartion-1);
    quickSort(arr, positionOfPartion+1, ei);

}

const main = () => {
    
    let arr = [5, 6, 1, 8, 9 ,55 ,78, 21, 98 ];
    let startIndex = 0;
    let endIndex = arr.length-1; //  8
    quickSort(arr, startIndex, endIndex);
    console.log("arr :: ", arr);
}

main()
*/