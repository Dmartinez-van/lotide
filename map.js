const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] !== [${expected}]`);
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

const words = [
  "ground", "control", "to", "major", "tom",
  "Carrot", "Apple", "Ford Mustang", "The colour orange"
];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results = map(words, word => word[0]);

assertArraysEqual(results, ['g', 'c', 't', 'm', 't', 'C', 'A', 'F', 'T']);
assertArraysEqual(map(words, word => word = 12), [12, 12, 12, 12, 12, 12, 12, 12, 12]);
assertArraysEqual(map(["David", "Billy", "James"], personName => personName === "James" ? "James" : null), [null,null,"James"]);