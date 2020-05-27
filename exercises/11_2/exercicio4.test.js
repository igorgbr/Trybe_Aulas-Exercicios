const exerc = require("./exercicio4");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    exerc.funcUpperCase = jest.fn()
    .mockImplementation(str => str.toLowerCase());

    expect(exerc.funcUpperCase('XABLAU')).toBe('xablau');
    expect(exerc.funcUpperCase).toHaveBeenCalled();
    expect(exerc.funcUpperCase).toHaveBeenCalledTimes(1);
    expect(exerc.funcUpperCase).toHaveBeenCalledWith('XABLAU');
    });

    test("mockando função para receber um parametro e retornar a ultima letra", () => {
        exerc.funcFirstLetter = jest.fn()
        .mockImplementation(str => str.charAt(str.length - 1));

        expect(exerc.funcFirstLetter('xablau')).toBe('u');
        expect(exerc.funcFirstLetter).toHaveBeenCalled();
        expect(exerc.funcFirstLetter).toHaveBeenCalledTimes(1);
        expect(exerc.funcFirstLetter).toHaveBeenCalledWith('xablau');
    });

    test("mockando função para receber tres parametro e concatenar", () => {
        exerc.concatStrings = jest.fn()
        .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

        expect(exerc.concatStrings('xablau ', 'toot ', 'foo')).toBe('xablau toot foo');
        expect(exerc.concatStrings).toHaveBeenCalled();
        expect(exerc.concatStrings).toHaveBeenCalledTimes(1);
        expect(exerc.concatStrings).toHaveBeenCalledWith('xablau ', 'toot ', 'foo');
    })




    
});
