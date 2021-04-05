const assert = require('chai').assert;
const tail = require('../tail');

// Test Code
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// assertEqual(tail(words).length, 2);
// assertEqual(tail(words), ["Lighthouse", "Labs"]);


describe("#tail", () => {
  it("should return 'Labs' when passed '['Yo Yo', 'Lighthouse', 'Labs']'", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });
});