const math = require('./math');
const service = require('service');

test('Testa se a função foi chamada, o valor retornado e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn()
    .mockReturnValue(10)
    .mockImplementationOnce((a, b) => a / b);
    
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
});