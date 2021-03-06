//quicksort
//uses partition (parts divided up) of an array

//middle index as a middle value (round up or down) 
//everything is compared to this middle value
//set up a left (is 0) and right index (right is the end) tracker
//iterate - if left index is < middle, increment left without changing
//iterate - as long as right index is greater than middle, increment without changing


//[1, 17, 12, 3, 9, 13, 21, 4, 27]
//midval = 9  (pivotVal, comparisonVal, etc.)
//swapping in place
// v                  v
//[1, 17, 12, 3, ~9~, 13, 21, 4, 27]
//    v
//[1, 17, 12, 3, ~9~, 13, 21, 4, 27]
//  17 needs to move but to where?
 //   v                       v
//[1, 17, 12, 3, ~9~, 13, 21, 4, 27]
//swap the left and right 
//[1, -4-, 12, 3, ~9~, 13, 21, -17-, 27]
//        v
//[1, 4, 12, 3, ~9~, 13, 21, 17, 27]
//end
//[1, 4, 9, 3, ~12~, 13, 21, 17, 27]

//the end result is NOT sorted
//the left half has the smaller values, the right side has the larger values


/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
 function partition(nums = [], leftIndex = 0, rightIndex = nums.length - 1) {
    //middle index as a middle value (round up or down) 
    //everything is compared to this middle value
    let midIndex = Math.floor(nums.length/2);
    while(rightIndex >= midIndex && leftIndex <= midIndex){
      //continue to increment left until we find a value greater than mid
      while(nums[leftIndex] < nums[midIndex]){
        leftIndex++;
      }
      //continue to decrement right until we find a value smaller than mid
      while(nums[rightIndex] > nums[midIndex]){
        rightIndex--;
      }
      //now we have a left greater than mid and a right smaller than mid & we can swap them
      // [a,b] = [b,a]; is the shorthand to swap without temp variable
      [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]];
      //increment/decrement again (?)
      leftIndex++;
      rightIndex--;
    }
    return nums;
  }
module.exports = { partition };

// const nums1 = [11, 8, 14, 3, 6, 2, 7];
// console.log("1 BEFORE:\n", nums1);
// console.log("1 AFTER:\n", partition(nums1));

const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
console.log("2 BEFORE:\n", nums2);
console.log("2 AFTER:\n", partition(nums2));

// const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// console.log("3 BEFORE:\n", nums3);
// console.log("3 AFTER:\n", partition(nums3));
