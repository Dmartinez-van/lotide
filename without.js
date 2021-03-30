const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] === [${expected}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  // If arrays are not same length, they are not the exact same.
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check same indicies between the arrays, must be exactly equal to pass.
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }
  return true;
};

const without = function(source, itemsToRemove) {
  // This provides a COPY of the source array. It should not affect the source array via referencing.
  // Googled the spread operator after this morning's lecture. I initially wanted to use .slice(), but seems that is the old method since ES6 was released.
  // Another method possible is the Array.from(), ie reduced = Array.from(source), would be the equvialent as below.
  // Spread operator ONLY GOES one level deep, will NOT WORK with multidemensional arrays (ie, arrays within arrays).
  let reduced = [...source];

  for (let itemRemove of itemsToRemove) {
    // Googled how to find indicies of an element while within a for of loop. What I found was the .entries method which seems to
    // provide the key to the key, value pair for a given array.
    for (let [i, item] of reduced.entries()) {
      if (item === itemRemove) {
        // If the item we will to remove is in our array, slice just that one item out.
        reduced.splice(i, 1);
      }
    }
  }
  // Check to ensure not changing original array.
  console.log("source", source);
  return reduced;
};

// Test Code for without
// console.log(without(["drum",4,"kit",3],["1","2",3,4,"drum"]));
assertEqual(without(["drum",4,"kit",3],["1","2",3,4,"drum"]), ["kit"]); // expect passed;
assertEqual(without(["chocolate", "mints", "lollipop", "soda", "taffy"],["taffy", "mints", "mint chocolate"]), ["chocolate", "lollipop", "soda"]); // expect passed;