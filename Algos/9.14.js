/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
*/

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
    //return array for the results
    var matchingObjects = [];
    //iterate through array of objects collection
    for (var i = 0; i < collection.length; i++) {
        //comparison array - we'll fill with t/f values, if any F values, don't push obj to return array
        var comparisonArray = [];
        //iterate through each object kvp of collection
        for (const [key, value] of Object.entries(collection[i])) {
            //compare each key/value of criteria, if one doesn't match object from collection, keep false
            for (const [searchKey, searchValue] of Object.entries(criteria)) {
                //need to determine if key is in criteria and only check those
                if (
                    criteria[searchKey] === collection[i][key] &&
                    searchKey === key
                ) {
                    comparisonArray.push(true);
                } else if (
                    criteria[searchKey] !== collection[i][key] &&
                    searchKey === key
                ) {
                    comparisonArray.push(false);
                }
            }
        }
        //if the comparison array contains no false values (all matches),
        if (!comparisonArray.includes(false)) {
            //push object at i to return array
            matchingObjects.push(collection[i]);
        }
    }
    //return the match
    return matchingObjects;
}

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];
const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];
//   console.log(findObjects(searchCriteria1, items));

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// console.log(findObjects(searchCriteria2, items));

/*****************************************************************************/

/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
  */

/* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated

  /**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} id
   * @param {Object} updatedVals Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */
function findByIdAndUpdate(id, updatedVals, collection) {
    if (updatedVals === {} || collection === []) {
        console.log("Empty vals", updatedVals);
        return null;
    }
    var indexOfMatch = null;
    var editThisObject = null;
    //check if the id exists in the collection,
    for (var i = 0; i < collection.length; i++) {
        var currentObject = collection[i];
        //if found, pull out the object to edit and grab the index
        if (currentObject.id === id) {
            indexOfMatch = i;
            editThisObject = collection[i];
            break;
        }
    }
    //if we are out of for loop and indexOfMatch is still null, return false as our collection
    //doesn't contain a matching id
    if (indexOfMatch === null) {
        return false;
    } else {
        let existingKeys = Object.keys(editThisObject);
        existingKeys.map((match) => {
            if(updatedVals[match]) {
                editThisObject[match] = updatedVals[match];
            }
        });
        //replace collection[savedIndex] with the edited object
        collection[indexOfMatch] = editThisObject;
        //return the edited object
        return editThisObject;
    }
}
const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
// console.log(findByIdAndUpdate(id1, updateData1, students));
const expected01 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
console.log(findByIdAndUpdate(id2, updateData2, students));
const expected02 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};

const id3 = 5;
const updateData3 = {};
// console.log(findByIdAndUpdate(id3, updateData3, students));
const expected03 = null;
