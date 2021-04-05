const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Code
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);
assertEqual(tail(words), ["Lighthouse", "Labs"]);
