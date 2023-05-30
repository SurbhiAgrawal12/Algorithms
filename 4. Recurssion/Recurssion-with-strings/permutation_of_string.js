/**
 * You are given a string "str" consisting of lowercase  english letters. Your task is to 
 * return all permutations of the given string in lexicographically increasing order.
 * String A is lexicographically less than string B. If eiither A is a prefix of B ( and A!= B)
 * or there exists such i (1<= i <= min([A], [B])), that A[i] < B[i], and for any j 
 * (1<=j<=i) A[i] = B[i]. Here |A| denotes the length of the string A.
 * 
 * lexicographically means: if str = "ABC", that means phle sare A wale words aane chahiye fir 
 * b wale sare then C wale sare. output = {ABC, ACB, BAC, BCA, CAB, CBA}
 */


const swap = (arr, i , index) => {
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
}


const permutation = (arr, index, ans) => {

    //Base case
    if(index >= arr.length) {
        console.log("arr  :: ", arr);
        ans.push(arr.join());
        console.log("ans :: ", ans);
        return;
    }

    for(let i = index; i < arr.length; i++) {
        swap(arr, i , index);
        permutation(arr, index+1, ans);
        //backtrack
        swap(arr, i , index);
    }

}

const main = () => {
    let str = "ABC";
    let arr = str.split("");
    console.log("arr :: ", arr);
    let index = 0;
    let ans = [];
    permutation(arr, index, ans);
    return ans;
}

console.log("result :: ", main());