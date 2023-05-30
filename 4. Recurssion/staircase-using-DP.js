function countWaysToRunUpStairs(N) {
  // Base cases
  if (N === 0) {
    return 1;
  }
  if (N < 0) {
    return 0;
  }

  // Create an array to store the number of ways for each step
  const dp = new Array(N + 1);

  // Initialize the base cases
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  // Compute the number of ways for each step using dynamic programming
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  // Return the result for N steps
  return dp[N];
}

// Example usage:
const N = 4; // Number of steps in the staircase
const ways = countWaysToRunUpStairs(N);
console.log(`Number of possible ways: ${ways}`);
