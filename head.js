const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] === [${expected}]`);
  }
};

const head = function(item) {
  if (typeof(item) === 'object') {
    return item[0];
  } else {
    return item;
  }
};

// Test Code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("David", "david");
// assertEqual("avacado", 1);
// assertEqual("Tomato", "Tomato");
assertEqual(head(1.5), 1.5000);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Cat");