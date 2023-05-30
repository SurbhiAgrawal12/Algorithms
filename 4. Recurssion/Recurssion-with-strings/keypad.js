const keyPad = (input_stringDigit, index_of_input_stringDigit, output_combinationOfStrings,  each_of_output_combinationOfStrings, mapping_of_keyPad) => {

    //Base case
    if(index_of_input_stringDigit >= input_stringDigit.length) {
        output_combinationOfStrings.push(each_of_output_combinationOfStrings);
        return;
    }

    //processing
    let numberRepresentationOfInputDigit = input_stringDigit[index_of_input_stringDigit]  - '0';
    let StringRepresentationOfInputDigit = mapping_of_keyPad[numberRepresentationOfInputDigit];

    for(let i = 0; i< StringRepresentationOfInputDigit.length; i++) {
        each_of_output_combinationOfStrings = each_of_output_combinationOfStrings + (StringRepresentationOfInputDigit[i]) ;
        console.log("each_of_output_combinationOfStrings :: ", each_of_output_combinationOfStrings);
        keyPad(input_stringDigit, index_of_input_stringDigit+1, output_combinationOfStrings,  each_of_output_combinationOfStrings, mapping_of_keyPad)
        // string is immutable in javascript, we cannot modify original string, so we  arae taking help of temp variable.
        let temp = each_of_output_combinationOfStrings.slice(0, each_of_output_combinationOfStrings.length - 1);
        each_of_output_combinationOfStrings = temp;
        console.log("each_of_output_combinationOfStrings 2:: ", each_of_output_combinationOfStrings);
    }
}

const main = (input_stringDigit) => {
    let output_combinationOfStrings =   [];
    if(input_stringDigit.length == 0) {
        return output_combinationOfStrings;
    }
    let each_of_output_combinationOfStrings = "";
    let index_of_input_stringDigit = 0;
    let mapping_of_keyPad = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    keyPad(input_stringDigit, index_of_input_stringDigit, output_combinationOfStrings,  each_of_output_combinationOfStrings, mapping_of_keyPad);
    return output_combinationOfStrings;
}

let input = "23";
console.log(main(input));
//{{ad}, ae, af,  bd, be, bf, cd,  ce, cf}


// var letterCombinations = function(digits) {
//     if (digits.length === 0) return [];
//     let result = [];
//     let options = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//     helperFun(digits, "", options, result);
//     return result;
//   };
  
//   function helperFun(digits, output, options, result) {
//     if (digits.length === 0) {
//       result.push(output);
//       return;
//     }
//     let n = digits.charAt(0);
//     let s = options[n];
//     for (let i = 0; i < s.length; i++) {
//       helperFun(digits.slice(1), output + s[i], options, result);
//     }
//   }

//   console.log(letterCombinations('23'));