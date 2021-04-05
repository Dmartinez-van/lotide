const takeUntil = function(array, callback) {
  const results = [];
  
  for (let element of array) {
    if (callback(element)) {
      return results;
    } else {
      results.push(element);
    }
  }
};

module.exports = takeUntil;