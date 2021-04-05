const middle = function(arr) {
  const midArr = [];
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return midArr;
  } else if (!(arr.length % 2)) { // Return middle two elements
    midArr.push(arr[midIndex - 1], arr[midIndex]);
  } else if (arr.length % 2) { // Return middle element
    midArr.push(arr[midIndex]);
  }
  return midArr;
};

module.exports = middle;
