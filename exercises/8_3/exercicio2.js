const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui

assert.equal(myIndexOf([1, 2, 3, 4]), 5, 'nao é o resultado esperado');
assert.throws(() => { myIndexOf(([1, 2, 3, 4]), 5,)}, /^Error: parameters must be numbers$/);
assert.equal(myIndexOf([1, 2, 3, 4]), 3, 'nao é o resultado esperado');