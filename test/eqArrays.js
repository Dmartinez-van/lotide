
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


// Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
assertEqual(eqArrays(["david", 3, 3], ["david", 3, 2]), false);