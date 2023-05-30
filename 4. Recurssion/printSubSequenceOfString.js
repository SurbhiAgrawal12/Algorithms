function printSubsequences(str) {
  // Recursive helper function
  function helper(current, index) {
    // Base case: reached the end of the string
    if (index === str.length) {
      console.log(current);
      return;
    }

    // Include the current character in the subsequence
    helper(current + str[index], index + 1);

    // Exclude the current character from the subsequence
    helper(current, index + 1);
  }

  // Start with an empty string and index 0
  helper("", 0);
}

// Example usage:
const string = "abc";
printSubsequences(string);

/**
 * output:
abc
ab
ac
a
bc
b
c
 */
