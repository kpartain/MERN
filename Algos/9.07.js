// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    //the max and min should start at the length so 0-x, x-0
    var x = sqrMatrix.length;
    //add nums[i][i] for 1,2,3 and 3,2,1 and get the difference
    var leftTopRightBottom = 0;
    var rightTopLeftBottom = 0;
    var i = 0;
    var j = x - 1;
    while (j !== -1 && i !== x) {
        var forLeft = sqrMatrix[j][i];
        var forRight = sqrMatrix[j][j];
        leftTopRightBottom += forLeft;
        rightTopLeftBottom += forRight;
        i++;
        j--;
    }
    var difference = leftTopRightBottom - rightTopLeftBottom;
    return difference;
}

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]; // 1+5 + 9 = 15 && 3 + 5+9 = 17, we want the difference, 2
console.log(diagonalDifference(squareMatrix1), "expected 2");
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
console.log(diagonalDifference(squareMatrix2), "expected 0");
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
/*****************************************************************************/

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
  */
/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
  */

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    
}

const numsA1 = [1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected3 = [1, 2, 2, 2, 6, 6, 7]; //there are only three 2s, from array 1
console.log(orderedMultisetUnion(numsA1, numsB1), "EXPECTED: ", expected3);

const numsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB2 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20]; //there are only three 2s from array 1
console.log(orderedMultisetUnion(numsA2, numsB2), "EXPETED: ", expected4);
