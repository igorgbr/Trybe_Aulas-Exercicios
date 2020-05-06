const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (arr) => {

    const number = [];
    for(i = 0; i < arr.length; i++){
        number.push(arr[i].length)
    }
    return number;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);