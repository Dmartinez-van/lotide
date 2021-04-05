const flatten = function(nestedArr) {

  // Check if the parameter is indeed an array
  if (!Array.isArray(nestedArr)) {
    return null;
  }

  // Loop through each element, checking if each element is also an array.
  // If it is an Array, bring the elements of which out and insert it into the outter array at the same index
  
  for (let i = 0; i < nestedArr.length; i++) {
    console.log("Loop i", i);
    console.log("nest arr length", nestedArr.length);
    if (Array.isArray(nestedArr[i])) {
      for (let j = nestedArr[i].length - 1; j > -1; j--) {
        console.log("loop j", j);
        nestedArr.splice(i + 1, 0, nestedArr[i][j]);
      }
      nestedArr.splice(i, 1);
    }
  }
  return nestedArr;
};

module.exports = flatten;