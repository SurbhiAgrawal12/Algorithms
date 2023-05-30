/* Power set: means set of all subsets
Input : [1,2,3]
Output: Power set => {{},{1},{2},{3},{1,2}, {2,3}, {1,3}, {1,2,3}}
*/

const subsets = (inputArr, outputArr, index, powerSet) => {
    //Base case
    if(index == inputArr.length) {
        powerSet.push(outputArr);
        return;
    }

    // Not Including Value which is at Index
    subsets(inputArr, outputArr, index+1,  [...outputArr]);
    // Including Value which is at Index
    outputArr.push(inputArr[index])
    subsets(inputArr, outputArr, index+1,  [...outputArr]);

}


const main = () => {
    let powerSet = [];
    let output = [];
    let index = 0;
    let input = [1,2,3];
    subsets(input, output, index, powerSet)
}