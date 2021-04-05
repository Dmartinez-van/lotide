const findKey = function(obj, callback) {
  // Loop through obj's keys
  
  for (let key of Object.keys(obj)) {
    // use callback on each key
    // callback should return a truthy value if a key is found and undefinded if not
    if (callback(obj[key])) return key;
  }
};

module.exports = findKey;

