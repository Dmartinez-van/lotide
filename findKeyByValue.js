/* eslint-disable camelcase */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(obj, value) {
  // Init an empty key to be added into later
  let key = "";

  // Loop through each item of the object's keys (we need to use Object.key() to specify loop over keys)
  for (let item of Object.keys(obj)) {
    // if the value we looking for exsists in a key:value pair, then save that item (aka the key we want) into the variable key
    if (value === obj[item]) {
      key = item;
      return key;
    }
  }
  // if the value does not exsist reutrn undefined
  return undefined;
};


// Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: "Mr. Bubbles Goes To Tomato Town"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Mr. Bubbles Goes To Tomato Town"), "horror");
assertEqual(findKeyByValue(bestTVShowsByGenre, "This does not exist"), "comedy");