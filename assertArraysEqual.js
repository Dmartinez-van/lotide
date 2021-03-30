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

// Test Code
assertEqual([1, 2, 3], [1, 2, "david"]); // expect fail
assertEqual([1, 2, 3], [1, 2, 3]); // expect passed
assertEqual([1, 2, 3], [1, 2, "3"]); // expect fail
assertEqual([1, 2, 3], [1, 2, 2]); // expect fail
assertEqual([1, 2, 3], [1, 2, 3, 4]); // expect fail
assertEqual(["david", 2, 3], ["david", 2, 3]); // expect passed
assertEqual([1, 2, 3], [1, 2, 3, null]); // expect fail
assertEqual([1, 2, 3], [1, 2, 3, undefined]); // expect fail