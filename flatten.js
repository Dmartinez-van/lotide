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

const flatten = function(nestedArr) {

  // Check if the parameter is indeed an array
  if (!Array.isArray(nestedArr)) {
    return null;
  }

  // Loop through each element, checking if each element is also an array.
  // If it is an Array, bring the elements of which out and insert it into the outter array at the same index
  
  for (let i = 0; i < nestedArr.length; i++) {
    console.log("Loop i", i);
    console.log("nest arr length", nestedArr.length);
    if (Array.isArray(nestedArr[i])) {
      for (let j = nestedArr[i].length - 1; j > -1; j--) {
        console.log("loop j", j);
        nestedArr.splice(i + 1, 0, nestedArr[i][j]);
      }
      nestedArr.splice(i, 1);
    }
  }
  return nestedArr;
};

// console.log(flatten([1,[2,3,"Hello"],4,5,[6,7,[3,["potato","Carrot"]],8,9]]));
console.log(flatten([1,2,[3,[4,"Hello"]]]));