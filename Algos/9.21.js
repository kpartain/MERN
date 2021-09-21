/* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
*/

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
    var newHashTable = {};
    for (var i = 0; i < items.length; i++) {
        var searchKey = items[i]["category"].toLowerCase();
        if (!newHashTable.hasOwnProperty(searchKey)) {
            newHashTable[searchKey] = [];
        }
        if (newHashTable.hasOwnProperty(searchKey)) {
            newHashTable[searchKey].push(items[i]);
        }
    }
    return newHashTable;
}

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

// console.log(groupObjects(objects));

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/*****************************************************************************/
/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(arrOne, arrTwo) {
    // return myLittleHelper(arrOne) === myLittleHelper(arrTwo);
    const string1 = myLittleHelper(arrOne);
    const string2 = myLittleHelper(arrTwo);
    return string1 === string2;
}

function myLittleHelper(arr) {
    var myLittleString = ".";
    let decrementCount = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i > -1) {
            do {
                decrementCount++;
                i--;
            } while (arr[i] === "#");
            while (decrementCount !== 0) {
                i--;
                decrementCount--;
            }
        }
        if (arr[i] !== "#") {
            myLittleString += arr[i];
        }
    }
    return myLittleString;
}

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
console.log(backspaceStringCompare(S1, T1));

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
console.log(backspaceStringCompare(S2, T2));

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
console.log(backspaceStringCompare(S3, T3));

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
console.log(backspaceStringCompare(S4, T4));
