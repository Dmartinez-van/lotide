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

const takeUntil = function(array, callback) {
  const results = [];
  // let i = 0;
  // while (!callback(array[i])) {
  //   results.push(array[i]);
  //   i++;
  // }

  for (let element of array) {
    if (callback(element)) {
      return results;
    } else {
      results.push(element);
    }
  }
};


// Driver Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// Test Code
assertArraysEqual(takeUntil([1,3,5,7,8], even => even % 2 === 0), [1,3,5,7]);
assertArraysEqual(takeUntil(["jill", "Gary", "Philp", 90000], type => typeof type !== "string"), ["jill", "Gary", "Philp"]);
assertArraysEqual(takeUntil([9000, "jill", "Gary", "Philp"], type => typeof type !== "number"), [9000]);


