/*
up movement : (x-1, y)
down movement :  (x+1, y)
left  movement : (x, y-1)
right movement : (x, y+1)

1: means open path
0: means blocked path

agar hum kisi (i,j) position se kisi (l,m) position me jate hai toh. so we have to check few conditions:
1. that coordinate should be inside matrix.
2. m[l][m] == 1 ( should be open path)
3. it should not be visited, that is esa nahi hona chahiye ki aap wahi se aaye ho.
that is visited[l][m] ==0

Approach:
lexiographical order me print karna hai path: means alphabatical increasing sorted order me print karna hai
like: DLRU
path should be string, so output would be string
hum jo bhi path bnaenge so jis bhi block ko visit kiya hoga use visited mark kar  denge

1. hum DLRU order dekh k check karenge kya down jana safe hai?
safe tab hoga jab x>=0 and y<=n, and x,y == 1,1 and it is not visited ie !visted(x)(y)

koi element visited hai ya nahi, ye check karne k liye hum ek aur matrix bnaenge. and block agar visted hoga toh uska value 1,1 kar denge
then for next travel, again humare pas 4 choices hai DLRU and hum sorted order me again frst D k liye chck karenge
*/
const isSafe = (newX, newY, n, arr, visted) => {
  if (
    newX >= 0 &&
    newX < n &&
    newY >= 0 &&
    newY < n &&
    visted[newX][newY] !== 1 &&
    arr[newX][newY] == 1
  ) {
    return true;
  }
  return false;
};
const solve = (x, y, arr, n, ans, visted, path) => {
  //Base case : ie rat reached destination
  if (x == n - 1 && y == n - 1) {
    ans.push(path);
    return;
  }

  //4 movements D L R U
  //Down ( in downward movement x ie row would increase and coloumn would remain same)
  if (isSafe(x + 1, y, arr, visted)) {
    visted[x][y] = 1;
    solve(x + 1, y, arr, n, ans, visted, path + "D");
  }

  //Left
  if (isSafe(x, y - 1, arr, visted)) {
    visted[x][y] = 1;
    solve(x, y - 1, arr, n, ans, visted, path + "L");
  }

  //right
  if (isSafe(x, y + 1, arr, visted)) {
    visted[x][y] = 1;
    solve(x, y + 1, arr, n, ans, visted, path + "R");
  }

  //up
  if (isSafe(x - 1, y, arr, visted)) {
    visted[x][y] = 1;
    solve(x - 1, y, arr, n, ans, visted, path + "U");
  }
  //recurssion se aane k baad sab block ko 0 kar  do
  // If no path is found, backtrack and mark the current position as unvisited
  visted[x][y] = 0;
};

let arr = [];
const searchMaze = () => {
  let visited = [];
  let ans = [];
  if (arr[0][0] === 0) {
    return ans;
  }
  let path = "";
  solve(0, 0, arr, arr.length, visited, path);
};
TC = O(4 ^ (n ^ 2));
SC = O(n * m);
