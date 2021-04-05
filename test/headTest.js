const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Code
assertEqual(head(1.5), 1.5000);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Cat");