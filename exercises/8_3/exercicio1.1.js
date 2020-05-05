const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// implemente seus testes aqui
assert.equal(sum(4, 5), 9, 'O resultado não é o esperado');
assert.equal(sum(0, 0), 0, 'O resultado não é o esperado');
assert.deepEqual(sum(4, "5"), 'O resultado não é o resperado');
