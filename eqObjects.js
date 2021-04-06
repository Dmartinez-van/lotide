// Returns true if both objects have identifcal keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  // Check for number of keys in each object
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key of Object.keys(obj1)) {
    if (!Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
      return eqObjects(obj1[key], obj2[key]);
    }
  }
  // If the above code does not result in false, then the objects are equal
  return true;
};

//Test code
// console.log(eqObjects({ a: { z: {cheese: 0} }, b: {poop: 'wow'} }, { a: { z: {cheese: 0} }, b: {poop: 'wow'} })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false



module.exports = eqObjects;