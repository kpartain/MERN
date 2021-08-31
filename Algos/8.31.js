//insertion sort
//take the value and put it into their place as iterated

function insertionSortSwap(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j >= 0 && nums[j] < nums[j - 1]) {
            [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
            j--;
        }
    }
    return nums;
}

function insertionSortShift(nums) {
    //consider the first item is already sorted
    for (var indexCompared = 1; indexCompared < nums.length; indexCompared++) {
        // take whatever the current value of the index at i (one) and store it as a variable
        var currentValueBeingCompared = nums[indexCompared];
            var leftValue = nums[indexCompared -1];
            // continue to compare it to the prior index, while it is smaller than the prior value, swap it
            while (leftValue > currentValueBeingCompared && leftIndex > 0) {
                leftIndex--;
            }
            //swap with the current value
            nums[leftIndex - 1] = currentValueBeingCompared;
    }
    //return the array nums
    return nums;
}

const numsOrdered2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(insertionSortShift(numsOrdered2));
console.log(insertionSortShift(numsRandomOrder2));
// console.log(insertionSortShift(numsReversed2));
