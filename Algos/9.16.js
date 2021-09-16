function getMaxServings(recipe, available) {
    //variable to store the minimum value, start at Number.MAX_SAFE_INTEGER;
    var numServingsPossible = Number.MAX_SAFE_INTEGER
    //iterate through KVPs of available
    for(const [rKey, rValue] of Object.entries(recipe)) {
      //store a value for the division of available/recipes FLOOR
      let numberOfServingsForThisKey = 0;
    //find where they are the same, find quantity by diving and using floor
        if(available[rKey]) {
          numberOfServingsForThisKey = Math.floor((available[rKey])/rValue);
        }
      //inside 1st loop, out of 2nd, if value stored < min, reassign
      if(numberOfServingsForThisKey < numServingsPossible) {
        numServingsPossible = numberOfServingsForThisKey
      }
    }
    //return the min value
    return numServingsPossible;
    }

const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;
console.log(getMaxServings(recipe1, available1));

const available2 = { ...available1, ["live squid"]: 10 };
console.log(getMaxServings(recipe1, available2));
const expected2 = 10;

const available3 = { ...available1 };
delete available3["live squid"];
console.log(getMaxServings(recipe1, available3));
const expected3 = 0;

//********************************************************************* */
/*  Jeremy, Li Yen, Karalynn,  Spencer, Chenxi
  Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null
*/

const user = {
    id: 101,
    email: "jack@dev.com",
    personalInfo: {
      name: "Jack",
      address: {
        line1: "westwish st",
        line2: "washmasher",
        city: "wallas",
        state: "WX",
      },
    },
    favorites: {
      number: 0,
    },
  };
  
  const keys1 = ["personalInfo", "address", "city"];
  let expected10 = "wallas";
  
  const keys2 = ["personalInfo", "address", "country"];
  let expected20 = null;
  
  const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
  let expected30 = null;
  
  const keys4 = ["favorites", "number"];
  const expected4 = 0;
  
  const keys5 = [];
  const expected5 = user;