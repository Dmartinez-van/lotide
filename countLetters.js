const countLetters = function(str) {
  let count = {};

  for (let letter of str) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }

  return count;
};

module.exports = countLetters;