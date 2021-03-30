const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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
