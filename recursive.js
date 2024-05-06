function sortArray(arr, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function getArraySize(nums) {
  let count = 0;
  while (nums[count] !== undefined) {
    count++;
  }
  return count;
}

function checkTriangular(nums, start, size) {
  if (start + 2 >= size) return 0;

  if (nums[start] + nums[start + 1] > nums[start + 2])
    return 1; // Triangular triplet found
  else return checkTriangular(nums, start + 1, size); // Move to the next starting position
}

function isTriangular(nums) {
  let size = getArraySize(nums);
  sortArray(nums, size); // Sort the array in non-decreasing order
  return checkTriangular(nums, 0, size);
}

const nums1 = [10, 50, 1];
const nums2 = [10, 7, 2, 5, 1, 8, 20];

console.log("Recursive Algorithm");
console.log("Example 1:");
console.log("Output:", isTriangular(nums1));

console.log("\nExample 2:");
console.log("Output:", isTriangular(nums2));
