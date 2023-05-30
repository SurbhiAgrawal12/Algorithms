const fact = (n) => {
    //base case
    if(n == 0) {
        return 1;
    }

   let ans  = n*fact(n-1);
   return ans;
}

// ** Or */
const fact2 = (n) => {
    //base case
    if(n == 0) {
        return 1;
    }

   return n*fact(n-1);
}