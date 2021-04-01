const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

// Returns true if both objects have identifcal keys with identical values.
// Otherwise you get back a big far false!
const eqObjects = function(obj1, obj2) {
  // Check for number of keys in each object
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // We will loop over each key in obj1.
  // And compare each key's value to every key:value pair in obj2.
  // If a pair does not exsist, it'll be false.
  for (const key of Object.keys(obj1)) {
    // This works because IF there is a key in obj1 AND obj2 we can call upon each
    // value using the brackey notation below and compare them.
    // If the key exsists in obj1 and NOT in obj2, it'll be false right away.
    
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // If arrays are not perfectly equal, return false
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  // If the above code does not result in false, then the objects are equal
  return true;
};


// Test Code
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true); // true

const abd = {a: "1", b: "2", d: 3};
assertEqual(eqObjects(ab, abd), false); // false

const dab = {d: "3", a: "3", b: "me"};
assertEqual(eqObjects(dab, abd), false); // false

const dadAlt = {a: "3", d: "1", d: "me"};
assertEqual(eqObjects(dab, dadAlt), false); // false

const loy = {l: "3", o: "1", y: "me"};
assertEqual(eqObjects(dab, loy), false); // false

const cd = { c: "1", d: ["2", 3], e: [3, 4], newkey: "some string"};
const dc = { d: ["2", 3], newkey: "some string", c: "1", e: [3, 4]};
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);