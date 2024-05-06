function isTriangular(arr) {
  let size = 0;
  while (arr[size] !== undefined) {
    size++;
  }

  for (let i = 0; i <= size - 3; i++) {
    for (let j = i + 1; j <= size - 2; j++) {
      for (let k = j + 1; k <= size - 1; k++) {
        if (
          arr[i] + arr[j] > arr[k] &&
          arr[j] + arr[k] > arr[i] &&
          arr[i] + arr[k] > arr[j]
        )
          return 1;
      }
    }
  }
  return 0;
}

const nums1 = [3, 1, 1];
const nums2 = [10, 2, 5, 1, 8, 20];

console.log("NON-RECURSIVE ALGORITHM");
console.log("Example 1:");
console.log("Output:", isTriangular(nums1));
console.log("\nExample 2:");
console.log("Output:", isTriangular(nums2));
