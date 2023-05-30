//** hum nth stair pe ya toh n-1 stair se aaye honge ya fir n-2 stair se aaye honge
 //   * We have only two  possibilities.

// f(n) = f(n-1) + f(n-2)
// agar n < 0 hai that is staires khatam ho gaye toh koi way hi nahi hai 
// jab wha pahunch sakte hai.
//   agar n = 0 toh hum 0th stair pe kese pahunch sakte hai, us hi stair pe jump karke.

let countDistinctWaysToClimbStairs = () => {

    //Base case
    if(n<0) {
        return 0;
    }
    if(n == 0)  {
        return 1;
    }

    let ans = countDistinctWaysToClimbStairs(n-1) + countDistinctWaysToClimbStairs(n-2);
    return ans;
}

// Note: This question can error out TLE, use DP in that case.