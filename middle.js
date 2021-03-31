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

const middle = function(arr) {
  const midArr = [];
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return midArr;
  } else if (!(arr.length % 2)) { // Return middle two elements
    midArr.push(arr[midIndex - 1], arr[midIndex]);
  } else if (arr.length % 2) { // Return middle element
    midArr.push(arr[midIndex]);
  }
  return midArr;
};

assertEqual(middle([1,2,3,4,5,5,4,2,3,'me',3,8,5,3,3,6,7,8,0]), ['me']); //odd ['me']
console.log(middle([0,1,2,3,4,5,6,7,8,9])); //even [4,5]
assertEqual(middle([0,1,2,3,4,5,6,7,8,9]), [4,5]);