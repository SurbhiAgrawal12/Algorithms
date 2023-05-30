// Reverse the string

const swap = (si, ei, str) => {
    let temp = str[si];
    str[si] = str[ei];
    str[ei] = temp;
}

const reverseString = (si, ei, str) => {
    //Base case
    if(si > ei) {
        return;
    }

    //processing
    swap(si, ei, str);
    si++;
    ei--;

    //recurssive relation
    reverseString(si, ei, str)

}