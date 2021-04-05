const without = function(source, itemsToRemove) {
  // This provides a COPY of the source array. It should not affect the source array via referencing.
  // Googled the spread operator after this morning's lecture. I initially wanted to use .slice(), but seems that is the old method since ES6 was released.
  // Another method possible is the Array.from(), ie reduced = Array.from(source), would be the equvialent as below.
  // Spread operator ONLY GOES one level deep, will NOT WORK with multidemensional arrays (ie, arrays within arrays).
  let reduced = [...source];

  for (let itemRemove of itemsToRemove) {
    // Googled how to find indicies of an element while within a for of loop. What I found was the .entries method which seems to
    // provide the key to the key, value pair for a given array.
    for (let [i, item] of reduced.entries()) {
      if (item === itemRemove) {
        // If the item we will to remove is in our array, slice just that one item out.
        reduced.splice(i, 1);
      }
    }
  }
  // Check to ensure not changing original array.
  console.log("source", source);
  return reduced;
};

module.exports = without;