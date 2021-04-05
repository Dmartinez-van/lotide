const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [2], if passed [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("should return [2,3], if passed [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it("should return [], if passed []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("should return ['me'], if passed [1,'me',3]", () => {
    assert.deepEqual(middle([1,"me",3]), ["me"]);
  });

});