const tail = function(item) {
  let tailArray = [];
  for (let i = 1; i < item.length; i++) {
    tailArray.push(item[i]);
  }
  return tailArray;
};

module.exports = tail;