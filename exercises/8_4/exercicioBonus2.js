const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:
const removeMiddle = (array) => {
    let mid = Math.floor(array.length / 2);
    let elementosRemovidos = array.splice(mid, 1)
    return elementosRemovidos;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);