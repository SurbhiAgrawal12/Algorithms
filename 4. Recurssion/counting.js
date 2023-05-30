/**
 * This is called tail recurssion
 * Numbers would get print in reverse order
 */
const counting = (n)  => {
    //base  case
    if ( n ==0) {
        return;
    }

    //processing part
    console.log(n);

    //recursive relation
    counting(n-1);
}

/**
 * This is called Head recurssion
 * Numbers would get print in increasing order
 */
 const counting2 = (n)  => {
    //base  case
    if ( n ==0) {
        return;
    }

    //recursive relation
    counting(n-1);

    //processing part
    console.log(n);

}
