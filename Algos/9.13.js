/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @returns {output}
 */
function entries(obj) {
    //one main array
    var arrayOfArrays = [];
    //iterate KVP
    for (let [key, value] of Object.entries(obj)) {
        //push one sub array for each KVP arr[0] key, arr[1] value
        arrayOfArrays.push([key, value]);
    }
    //return main array
    return arrayOfArrays;
}

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
// console.log(entries(obj1));

const expected0 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
// console.log(entries(proto));

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});
console.log("OBJ 2", obj2);
console.log(entries(obj2));

const expected00 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];
/*****************************************************************************/

/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  */

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
    var startString = "INSERT INTO " + tableName + " (";
    var midString = ") VALUES (";
    var endString = ");";
    var columnString = "";
    var valueString = "";
    for (let [key, value] of Object.entries(columnValuePairs)) {
        columnString +=  key + ", "; //pop the last 2 for erroneous space and comma
        valueString += (typeOf(value) === "string" ? ("'" + value + "'" + ", ") : ( value + ", ")); //pop the last 2 for erroneous space and comma
    }
    var returnString =
        startString +
        columnString.slice(0, -2) +
        midString +
        valueString.slice(0, -2) +
        endString;
    return returnString;
}

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
console.log(insert(table, insertData1));
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
console.log(insert(table, insertData2));
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.
