const checkPallindrome = (str, si, ei) => {

    //Base case
    if(si > ei) {
        return true;
    }

    //processing
    if(str[si] == str[ei]) {
        si++;
        ei--;
        return checkPallindrome(str, si, ei)
    }else {
        return false;
    }
}