const letterPositions = function(sentence) {
  const results = {};

  for (let index in sentence) {
    if (sentence[index] !== " ") {
      if (Array.isArray(results[sentence[index]])) {
        results[sentence[index]].push(Number(index));
      } else {
        const tempArr = [];
        tempArr.push(Number(index));
        results[sentence[index]] = tempArr;
      }
    }
  }
  return results;
};

module.exports = letterPositions;