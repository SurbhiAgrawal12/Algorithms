let arr = [2, 4, 6, 8, 10];

const binarySearch = (arr, key) => {
  let si = 0;
  let ei = arr.length - 1;
  let mi = si + Math.floor((ei - si) / 2);

  while (si <= ei) {
    if (arr[mi] == key) {
      return mi;
    }
    if (key > arr[mi]) {
      si = mi + 1;
    }
    if (key < arr[mi]) {
      ei = mi - 1;
    }
    mi = si + Math.floor((ei - si) / 2);
  }
  return -1;
};

// int ka range hota hai 2^31 -1, so,(2^31 -1)+(2^31-1) would come in a vry big value.
//so, we will write si + (ei - si) / 2

/**
 * Complexity
 * n = n/2^0
 * n/2 = n/2^1
 * n/4
 * n/8
 * n/16
 * ....
 * n/2^k
 * n/2^k = 1 => 2^k = n => klog2(2) = log(n) => k =  logn *
 */
