/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

1. take in smaller num, larger num
2.
3. if num is greater than second return

***********************************************************************/


function range(start, end) {
  // Your code here
  // if start with num bigger than end return empty arr
  // if the numbers are the same return empty arr
  if (start >= end) {
    return [];
  }
  // returns an arr
  // array starts with arr
  // adds range(start + 1, end) to array, calls itself and keeps adding
  return [start].concat(range(start + 1, end));
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
