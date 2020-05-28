const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "subtrair");

  math.subtrair(1, 2);
  console.log(math.subtrair(5, 2))
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenCalledWith(5, 2);
  expect(mockSomar(5, 2)).toBe(3);
});
