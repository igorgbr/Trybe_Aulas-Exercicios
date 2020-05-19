const exercise1 = require('./exercise1');
const exercise2 = require('./exercise2');
const exercise3 = require('./exercise3');
const exercise4 = require('./exercise4');
const exercise5 = require('./exercise5');

describe('exercicio 1', () => {
    test('soma 1 e 2 para dar 3', () => {
        expect(exercise1.sum(1, 2)).toBe(3);
        expect(exercise1.sum(0, 0)).toBe(0);
        expect(()=> { exercise1.sum(4, '5') }).toThrow();
     });
});

describe('exercicio 2', () => {
    test('testa o retorno', () => {
        const arr = [1, 2, 3, 4];
       expect(exercise2.myIndexOf(arr, 3)).toBe(2);
       expect(exercise2.myIndexOf(arr, 5)).toBe(-1);
    });
});

describe('exercicio 3', () => {
    test('testa o retorno', () => {
       expect(exercise3.mySum([1, 2, 3, 4])).toBe(10);
       expect(exercise3.mySum([1, -2, -3, 4])).toBe(0);
    });
});

describe('exercicio 4', () => {
    test('remove um elemento do array', () => {
       const arr = [1, 2, 3, 4];
       expect(exercise4.myRemove(arr, 3)).toEqual([1, 2, 4]);
       expect(exercise4.myRemove(arr, 3)).not.toEqual(arr);
       expect(exercise4.myRemove(arr, 5)).toEqual(arr);
    });
});

describe('exercicio 5', () => {
    test('remove um elemento do array e n copia', () => {
       const arr = [1, 2, 3, 4];
       expect(exercise5.myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
       expect(exercise5.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
       expect(exercise5.myRemoveWithoutCopy(arr)).toEqual(arr);
       expect(exercise5.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);

    });
});


