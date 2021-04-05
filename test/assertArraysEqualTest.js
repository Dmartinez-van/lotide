const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, "david"]); // expect fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // expect passed
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // expect fail
assertArraysEqual([1, 2, 3], [1, 2, 2]); // expect fail
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // expect fail
assertArraysEqual(["david", 2, 3], ["david", 2, 3]); // expect passed
assertArraysEqual([1, 2, 3], [1, 2, 3, null]); // expect fail
assertArraysEqual([1, 2, 3], [1, 2, 3, undefined]); // expect fail