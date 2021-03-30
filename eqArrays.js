const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] === [${expected}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  let isTrue = false;
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] === arr2[i]) {
      isTrue = true;
    } else {
      isTrue = false;
      return isTrue;
    }
    i++;
  }
  return isTrue;
};

// Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
assertEqual(eqArrays(["david", 3, 3], ["david", 3, 2]), false);