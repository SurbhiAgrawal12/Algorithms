// Question -> A string will be passed as an argument, if there is an embedded key present in the object, return it else return undefined.

// Solution -> I firstly thought of recursion but it can be easily solved without recursion since object is already present inside the function.

/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
  const arr = path.split(".");
  //console.log(arr);
  let ans = object;
  for (let x in arr) {
    console.log("path", x, arr[x]);
    if (ans[arr[x]] !== undefined) {
      ans = ans[arr[x]];
    } else {
      ans = undefined;
      break;
    }
  }
  return ans;
};

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null

/**
 * Test the below code as  well
 * function findPath(obj, path) {
  // Split the path into an array of property names
  const props = path.split('.');
  // Traverse the object by following the path
  let val = obj;
  for (let i = 0; i < props.length; i++) {
    val = val[props[i]];
    if (val === undefined) {
      // If a property does not exist, return undefined
      return undefined;
    }
  }
  // Return the value at the end of the path
  return val;
}

 */
