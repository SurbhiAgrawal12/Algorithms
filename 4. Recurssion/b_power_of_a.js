/**
 *  (a)^b = if is even ((a)^b/2)*((a)^b/2)
 *  (a)^b = if is odd  a*(a^b/2)*(a^b/2)
 */

const power = (a, b) => {

    //Base  case
    if(b == 0) {
        return 1;
    }
    if(b == 1) {
        return a;
    }

    //Recurssive call
    let ans = power(a, b/2);

    //processing
    if(b%2 ==0) {
        return (ans * ans);
    }else {
        return (a* ans * ans);
    }
}