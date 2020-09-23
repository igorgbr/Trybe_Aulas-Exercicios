
/* function validaNumeros(a, b, c) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject('digite um numero');

    resolve(a + b);
  })
    .then((r) => {
      if (r * c < 50) {
        return Promise.reject('Valor muito baixo: ' + r * c);
      }
      return console.log(r * c);
    })

    .catch((err) => console.error(err));
}

validaNumeros(50, 62, 23); */

const validaNumeros = async (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) Promise.reject('digite um numero')

    const sum = a + b;
    const mul = sum * c;
    return mul < 50 ? Promise.reject('valor muito baixo') : console.log(mul);
};


validaNumeros(51, 80, 54)
.catch((err) => console.error(err))