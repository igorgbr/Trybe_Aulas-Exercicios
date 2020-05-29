const service = require('service');

// test('Testa se a função foi chamada, o valor retornado e quantas vezes foi chamada', () => {
//     service.randomNumber = jest.fn()
//     .mockReturnValue(10)
//     .mockImplementationOnce((a, b) => a / b);
    
//     expect(service.randomNumber(10, 2)).toBe(5);
//     expect(service.randomNumber).toHaveBeenCalled();
//     expect(service.randomNumber).toHaveBeenCalledTimes(1)
//     expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
// });

test('Testa se a função foi chamada, o valor retornado e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn()
    .mockImplementationOnce((a, b, c) => a * b * c);
    
    expect(service.randomNumber(3, 2, 2)).toBe(12);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
    expect(service.randomNumber).toHaveBeenCalledWith(3, 2, 2);

    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0)
    service.randomNumber.mockImplementationOnce((a) => a * 2);
    
    expect(service.randomNumber(3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
    expect(service.randomNumber).toHaveBeenCalledWith(3);
});

test('Retorna o dobro do parametro passado', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0)
    service.randomNumber.mockImplementationOnce((a) => a * 2);
    
    expect(service.randomNumber(3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
    expect(service.randomNumber).toHaveBeenCalledWith(3);
});