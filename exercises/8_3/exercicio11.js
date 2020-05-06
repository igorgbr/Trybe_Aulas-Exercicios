const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.deepStrictEqual(isAbove(6, 2), true);
assert.deepStrictEqual(isAbove(2, 8), false);
assert.deepStrictEqual(isAbove(2, '8'), false);