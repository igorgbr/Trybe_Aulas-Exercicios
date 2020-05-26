const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }

  test(`testa se retorno é TEST`, (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
  });