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

const letterPositions = function(sentence) {
  const results = {};

  for (let index in sentence) {
    if (sentence[index] !== " ") {
      if (Array.isArray(results[sentence[index]])) {
        results[sentence[index]].push(Number(index));
      } else {
        const tempArr = [];
        tempArr.push(Number(index));
        results[sentence[index]] = tempArr;
      }
    }
  }
  return results;
};


// Test Code
assertArraysEqual(letterPositions("hello").e,[1]);
// console.log(letterPositions("hello").e);
assertArraysEqual(letterPositions("hello there").e,[1,8,10]);
// letterPositions("He llo my name is potato head");