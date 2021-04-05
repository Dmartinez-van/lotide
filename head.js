const head = function(item) {
  if (typeof(item) === 'object') {
    return item[0];
  } else {
    return item;
  }
};

module.exports = head;