/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
 function allNonConsecutive(sortedNums) {
    //have a return array for the objects
    const returnArray = [];
    //start iterating from 0 through the end;
    for(var j = 0; j < sortedNums.length; j++){
      //if index+1 is not the same as array[index]+1, 

      if(sortedNums[j+1] !== (sortedNums[j]+1)){
        //push j and array[j+1] as a new object (this is the next non-consecutive value)
        returnArray.push(
          {
            i: j+1,
            n: sortedNums[j+1]
          }
        );
      }
    }
    //return array of objects
    return returnArray;
  }

const numsTest = [1, 2, 3, 4, 6, 7, 8, 10];
const expectedTest = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];
// console.log(allNonConsecutive(numsTest));

/*****************************************************************************/

// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
 function findConsqSums(nums, targetSum) {
    debugger
    var returnArray = [];
    for(var i=0; i < nums.length; i++){
        var currentIValue = i;
      var subArray = [];
      var currentSum = 0;
      do {  
        //increment sum
        currentSum += nums[i];
        //push to the subarray - if these values are higher or lower than target, we won't push it later 
          //with our if statement.
        subArray.push(nums[i]);
        //i++ in here
        i++;
      } while(Math.abs(currentSum) < Math.abs(targetSum) && i < nums.length); 
      
        //if the current sum is not equal to the target, do nothing 
        //otherwise it equals the target, push this sub array into main return array
        if(currentSum === targetSum) {
        //bonus 0s - outside of while loop, for each i+1 that is 0, make a new sub array which copies the original and adds a 0
        //do this with a zero counter and another for loop? not sure
          returnArray.push(subArray);
        }
        i = currentIValue;
    }
    return returnArray;
}
const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];
console.log(findConsqSums(nums1, sum1));

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];
// console.log(findConsqSums(nums2, sum2));

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];
//this doesn't account for the 0s - we only had to add absolute value to our do-while statement
// console.log(findConsqSums(nums3, sum3));