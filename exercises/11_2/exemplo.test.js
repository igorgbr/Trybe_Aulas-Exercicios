function randomNumber() {
  return Math.floor(Math.random() * 101);
}
function isDivisible(number) {
  if (randomNumber() % number === 0) {
    return true;
  }
}

const service = require('service');
test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn()
  .mockReturnValue(true)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false);

  expect(service.randomNumber(2)).toBe(true);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);

  expect(service.randomNumber(3)).toBe(false);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(2);

  expect(service.randomNumber(6)).toBe(true);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(3);

  expect(service.randomNumber(10)).toBe(true);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(4);
});
