const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`😀🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};


const eqObjects = function(obj1, obj2) {
  // Check for number of keys in each object
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// Test Code
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const something = {d: 1223, a: "1"};
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, something);