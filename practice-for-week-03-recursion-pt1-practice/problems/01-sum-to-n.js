/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
  // Your code here
  if (n < 0 ) {
    return null;
  }
  // once n hits zero, return n for recursive step
  if (n === 0) {
    return n;
  }
  // sets result to n + n-1,
  let result = sumToN(n - 1) + n;
  // after every num added return result
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
