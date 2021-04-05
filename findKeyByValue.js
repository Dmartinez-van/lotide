const findKeyByValue = function(obj, value) {
  // Init an empty key to be added into later
  let key = "";

  // Loop through each item of the object's keys (we need to use Object.key() to specify loop over keys)
  for (let item of Object.keys(obj)) {
    // if the value we looking for exsists in a key:value pair, then save that item (aka the key we want) into the variable key
    if (value === obj[item]) {
      key = item;
      return key;
    }
  }
  // if the value does not exsist reutrn undefined
  return undefined;
};

module.exports = findKeyByValue;