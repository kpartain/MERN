/**Vincent, Dustine, Kara, Chenxi, Katelyn
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

 const riverLevels1 = [15, 17, 30];
 const expected1 = 15; // 30 - 15 = 15
 
 const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
 const expected2 = 20; // 25 - 5 = 20
 
 const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
 const expected3 = 11; // 12 - 1 = 11
 
 const riverLevels4 = [1, 5];
 const expected4 = 4;
 
 const riverLevels5 = [5, 1];
 const expected5 = -1;
 
 const riverLevels6 = [9, 7, 7, 7];
 const expected6 = -1;
 
 const riverLevels7 = [42];
 const expected7 = -1;
 
 /**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
   function measureWaterLevels(waterLevels) {
   //greedy algo
   var maxDif = -1;
   var minVal = Number.MAX_VALUE
   for (var i = 0; i < waterLevels.length; i++) {
 
     if (waterLevels[i] - minVal < 0) {
       minVal = waterLevels[i];
     }
     if (waterLevels[i] - minVal > maxDif) {
       maxDif = waterLevels[i] - minVal;
     }
   }
   return maxDif;
 }
 
 
 
 /*****************************************************************************/
 
 /*
   Given two arrays of ints
   return the symmetric differences, (aka disjunctive union)
     - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
       think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
     - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
   Venn Diagram Visualization:
     - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 */
 
 /* 
   Explanation: 1, 2, and 3 are shared so are excluded
     4 and 5 are included because they exist only in 1 array,
     but have duplicates, so only one copy of each is kept.
 */
 
 /**
  * Produces the symmetric differences, aka disjunctive union of two sets.
  * Venn Diagram Visualization:
  * https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
  * - Time: O(?).
  * - Space: O(?).
  * @param  {Array<number>} numsA
  * @param  {Array<number>} numsB
  *    Both given sets are multisets in any order (contain dupes).
  * @returns {Array<number>} The union of the given sets but excluding the shared
  *    values (union without intersection).
  *    i.e., if the element is in one array and NOT the other, it should be
  *    included in the return.
  */
  function symmetricDifferences(numsA, numsB) {
   //make a return array
   var returnArray = [];
   //THE ISSUE WITH CONCAT IS IT DOESN'T PUSH ANY DUPLICATE VALUES THAT EXIST IN NUMSA OR NUMS B
   //THAT DO NOT EXIST IN THE OTHER ARRAY
   //we need to track the size of numsA and start j there? or find recursive solution
   var concatArray = numsA.concat(numsB);
   console.log("concat array", concatArray);
   for(var i = 0; i < concatArray.length; i++){
     var shouldBePushed = true;
     for(var j = 0; j < concatArray.length; j++) {
       console.log("i", concatArray[i], "j", concatArray[j]);
       if(concatArray[i] === concatArray[j] && i !== j){
         console.log("matched", concatArray[i], concatArray[j]);
         shouldBePushed = false;
         break;
       }
     }
     if(shouldBePushed === true) {
        console.log("non matched?", concatArray[i]) 
       returnArray.push(concatArray[i]);
     }
   }
   return returnArray;
 }
 
 const test1NumsA = [1, 2];
 const test1NumsB = [2, 1];
 const expected1 = [];
 console.log(symmetricDifferences(test1NumsA, test1NumsB))
 // Explanation: 1 and 2 are in both arrays so are excluded
 
 const test2NumsA = [1, 2, 3];
 const test2NumsB = [4, 5, 6];
 const expected2 = [1, 2, 3, 4, 5, 6];
 console.log(symmetricDifferences(test2NumsA, test2NumsB))
 // Explanation: neither array has shared values, so all are included
 
 const test3NumsA = [4, 1, 2, 3, 4];
 const test3NumsB = [1, 2, 3, 5, 5, 2];
 const expected3 = [4, 5];
 console.log(symmetricDifferences(test3NumsA, test3NumsB))
 // ^ this is the test case that fails because numsA has 4 2x and numsB has 5 2x therefore
 //it isn't adding to the new array. 