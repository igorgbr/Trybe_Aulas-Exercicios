const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz' , 'O resultado não é o esperado');
assert.deepStrictEqual(myFizzBuzz(33), 'fizz');
assert.deepStrictEqual(myFizzBuzz(20), 'buzz');
assert.deepStrictEqual(myFizzBuzz('20'), false);