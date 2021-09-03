/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array
  in-place.
  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the
      last idx.
  - later these params will be used to specify a sub section of the array to
      partition.
  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/

function partition(nums = [], left = 0, right = nums.length - 1) {
    var pivot = Math.floor(nums.length / 2); // leave as this for now since partition looks wild otherwise.
    var i = left - 1;
    var j = right + 1;
    while (i < j) {
      do {
        i++;
      } while (nums[i] < nums[pivot]);
      do {
        j--;
      } while (nums[j] > nums[pivot]);
      if (i >= j) {
        return j; //should be the same as pivot at this point
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return j;
}

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
 function quickSort(nums = [], left = 0, right = nums.length - 1) {
    //when should recursive call stop? break case
    if(left >= right){
      return;
    }
    //variable declarations/other functions - use of partition
    //partition returns pivot index
    let pivotIndex = partition(nums, left, right);
    //recursive call - what needs to be reassigned?
    quickSort(nums, left, pivotIndex-1);
    quickSort(nums, pivotIndex+1,right);
  
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];
console.log("BEFORE\n", nums1);
console.log("AFTER\n", quickSort(nums1));
const expected1 = [2, 3, 6, 7, 8, 11, 14];

//[11, 8, 14, 3, 6, 2, 7];
//[2,8,14,3,6,11,7];
//[2,3,14,8,6,11,7];
//[2,3,7,6,8,11,14]
//[2,3,6,7,8,11,14] **

// const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// console.log("BEFORE\n", nums2);
// console.log("AFTER\n", quickSort(nums2));
// const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

// const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// console.log("BEFORE\n", nums3);
// console.log("AFTER\n", quickSort(nums3));
// const expected3 = [2, 3, 3, 6, 7, 8, 11, 14];