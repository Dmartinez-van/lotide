const eqArrays = function(arr1, arr2) {
  // If arrays are not same length, they are not the exact same.
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (const index in arr1) {
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      return eqArrays(arr1[index], arr2[index]);
    } else {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;