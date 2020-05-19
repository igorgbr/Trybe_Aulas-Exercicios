const exercise1 = require('./exercise1')

test('soma 1 e 2 para dar 3', () => {
    expect(exercise1.sum(1, 2)).toBe(3);
    expect(exercise1.sum(0, 0)).toBe(0);
    expect(()=> { exercise1.sum(4, '5') }).toThrow();
 })