// /**
//  * Removes every element in the array, starting from idx 0 until the callback
//  * function returns true when passed the iterated element.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<any>} arr
//  * @callback cb A callback function that expects to receive an array element.
//  * @returns {Array<any>} The given array with only the remaining items.
//  */
function dropIt(arr, cb) {
    return arr.filter(num => cb(num))
  }
// const nums10 = [1, 4, 3, 6, 9, 15];
// const callback10 = (elem) => {
//   return elem > 5;
// };
// const expected10 = [6, 9, 15];

// const nums20 = [...nums1];
// const callback20 = (elem) => {
//   return elem > 2;
// };
// const expected20 = [4, 3, 6, 9, 15];

// const nums30 = [...nums1];
// const callback30 = (elem) => false;
// const expected30 = [];



/*****************************************************************************/

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
 function canStringBecomePalindrome(str) {
    if (str.length === 0) {
      return false;
    }
    var setOfLetters = {};
    for(var i=0; i < str.length; i++) {
      setOfLetters.hasOwnProperty(str[i]) ? setOfLetters[str[i]] = (setOfLetters[str[i]]+1) : setOfLetters[str[i]] = 1;
    }
    var numOfOdds = 0;
    for(const [key, value] of Object.entries(setOfLetters)) {
      value % 2 != 0 ? numOfOdds++ : null;
    }
    return numOfOdds <= 1 ? true : false;
  }  

const str1 = "";
const expected1 = false;
console.log("FALSE",canStringBecomePalindrome(str1));

const str2 = "a";
const expected2 = true;
console.log("TRUE",canStringBecomePalindrome(str2));

const str3 = "ddaa";
const expected3 = true;
console.log("TRUE",canStringBecomePalindrome(str3));
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
console.log("TRUE",canStringBecomePalindrome(str4));
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
console.log("TRUE",canStringBecomePalindrome(str5));
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;
console.log("FALSE",canStringBecomePalindrome(str6));

