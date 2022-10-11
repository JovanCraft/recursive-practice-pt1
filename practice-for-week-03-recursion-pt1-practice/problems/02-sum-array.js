/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

// takes in array of ints
// go through each index,
// add current and next index,
// call to do same
//

// return arr with first i + second i
// remove first index
// when only 1 num in array, that's result

***********************************************************************/

function sumArray(arr) {
  // Your code here
  let newArr = arr;
  if (arr.length === 1) {
    return arr[0];
  }
  let firstNum = newArr.shift();
  newArr[0] = newArr[0] + firstNum;
  return sumArray(newArr);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
