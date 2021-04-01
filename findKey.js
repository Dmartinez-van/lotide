const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function(obj, callback) {
  // Loop through obj's keys
  
  for (let key of Object.keys(obj)) {
    // use callback on each key
    // callback should return a truthy value if a key is found and undefinded if not
    if (callback(obj[key])) return key;
  }
};

const starsValue = x => x.stars === 2;

// Test Code
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, starsValue)); // => "noma"

const data1 = {
  bob : 1,
  dave : 3,
  turkey : {stars : 2},
  chicken : {
    broth : "salty",
    temp : "boiling",
    veggies : "no"
  }
};

assertEqual(findKey(data1, starsValue), "turkey");
assertEqual(findKey(data1, x => x === 3), "dave");
assertEqual(findKey(data1, x => x.broth === "salty"), "chicken");