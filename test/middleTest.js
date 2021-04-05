const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1,2,3,4,5,5,4,2,3,'me',3,8,5,3,3,6,7,8,0]), ['me']); //odd ['me']
//console.log(middle([0,1,2,3,4,5,6,7,8,9])); //even [4,5]
assertArraysEqual(middle([0,1,2,3,4,5,6,7,8,9]), [4,5]);
assertArraysEqual(middle([1,2,'me',4,5,6]), ['me',4]);