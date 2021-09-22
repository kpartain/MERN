/* 
Given to alumni by Riot games in 2021.
*/

const str10 = "b70a164c32a20c10";
const expected10 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
 function rehash(s) {
    let myString = '';
    let myHash = {}
    for (let i = 0; i < s.length; i++) {
      let j = i + 1;
      let numString = ''
      if ((/[a-zA-Z]/).test(s[i]) && !(s[i] in myHash)) {
        myHash[s[i]] = 0;
      }
      while (!(/[a-zA-Z]/).test(s[j])) {
        numString += s[j]
        j++;
      }
      myHash[s[i]] += parseInt(numString)
      i = j - 1;
    }
    let keyArr = Object.keys(myHash).sort()
    for (let i = 0; i < keyArr.length; i++) {
      myString += (keyArr[i] + myHash[keyArr[i]])
  
    }
    return myString;
  }

/*****************************************************************************/

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    var arrayOfPossible = [];
    for (var i = 0; i < str.length; i++) {
        var currentI = i;
        var arrayOfChars = [];
        while (!arrayOfChars.includes(str.charAt(i))) {
            arrayOfChars.push(str.charAt(i));
            i++;
        }
        var stringPushed = arrayOfChars.join("").trim();
        arrayOfPossible.push(stringPushed);
        i = currentI;
    }
    var highestCount = 0;
    for (var j = 0; j < arrayOfPossible.length; j++) {
        if (arrayOfPossible[j].length > highestCount) {
            highestCount = arrayOfPossible[j].length;
        }
    }
    return highestCount;
}

const str1 = "abcabcbb";
const expected1 = 3;
console.log("EXPECTED 3",lengthOfLongestSubString( str1));
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
console.log("EXPECTED 1", lengthOfLongestSubString(str2));
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
console.log("EXPECTED 3", lengthOfLongestSubString(str3));
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
console.log("EXPECTED 4", lengthOfLongestSubString(str4));
// Explanation: "vadf"
