// Returns true if both objects have identifcal keys with identical values.
// Otherwise you get back a big far false!
const eqObjects = function(obj1, obj2) {
  // Check for number of keys in each object
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // We will loop over each key in obj1.
  // And compare each key's value to every key:value pair in obj2.
  // If a pair does not exsist, it'll be false.
  for (const key of Object.keys(obj1)) {
    // This works because IF there is a key in obj1 AND obj2 we can call upon each
    // value using the brackey notation below and compare them.
    // If the key exsists in obj1 and NOT in obj2, it'll be false right away.
    
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // If arrays are not perfectly equal, return false
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  // If the above code does not result in false, then the objects are equal
  return true;
};

module.exports = eqObjects;