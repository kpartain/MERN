/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/
/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
 function amazonMusicRuntime(busDuration, songDurations) {
    var originalArray = [...songDurations];
    songDurations.sort(function(a, b){return b-a});
    for(var i = 0; i < songDurations.length; i++){
        var goalLength = (busDuration - 30) - songDurations[i];
        var currentIndex = i + 1;
        while(songDurations[currentIndex] !== goalLength && currentIndex < songDurations.length){
            currentIndex++;
        }
        if(songDurations[currentIndex] === goalLength){
            return([originalArray.indexOf(songDurations[i]),originalArray.indexOf(songDurations[currentIndex])]);
        }
    }
    return [-1, -1];
}

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
console.log(amazonMusicRuntime(busDuration1, songDurations1));
const expectedresult = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
console.log(amazonMusicRuntime(busDuration2, songDurations2));
const expectedresult2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
console.log(amazonMusicRuntime(busDuration3, songDurations3));
const expectedresult3 = [-1, -1]; // not found.


/*****************************************************************************/
/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
 function canBuildS1FromS2(s1, s2) {
    //to lower case both strings
    var sOne = s1.toLowerCase().split('');
    var sTwo= s2.toLowerCase().split('');
    //compare s1 iteration to see if s2 contains it
    for(var i=0; i < sOne.length; i++) {
        var matchedIndex = sTwo.indexOf(sOne[i]);
        console.log(matchedIndex, sOne[i]);
        if(matchedIndex === -1){
            return false;
        } else {
            sTwo[matchedIndex] = null;
        }
    }
    return true;
}


const strA1 = "Hello World";
const strB1 = "lloeh wordl";
console.log("TRUE", canBuildS1FromS2(strA1,strB1));
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
console.log("FALSE", canBuildS1FromS2(strA2,strB2));
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
console.log("FALSE", canBuildS1FromS2(strA3,strB3));
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
console.log("TRUE", canBuildS1FromS2(strA4,strB4));
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
console.log("FALSE", canBuildS1FromS2(strA5,strB5));
const expected5 = false;
// Explanation: not strB5 does not have enough "l" chars.

