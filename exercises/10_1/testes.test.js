const exercise1 = require('./exercise1');
const exercise2 = require('./exercise2');
const exercise3 = require('./exercise3');

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



