let inquirer = require('inquirer');

/* function validateFunc(input) {
  if (input < 0) return 'Informe um número maior ou igual a 0';
  if (Number.isNaN(input) || !Number.isInteger(input))
    return 'Informe um número inteiro';
  return true;
} */


function isInteger(number) {
    return parseInt(number) === parseFloat(number);
  }
  const validateFunc = value => {
    if (validateNumber < 0) return 'Enter a number equal to or greater than 0';
    if (isNaN(validateNumber) || !isInteger(validateNumber)) return 'Enter an entire number';
    return true;
  };

function realizaFatoracao(x) {
  if (x == 0) return 1;
  else return x * realizaFatoracao(x - 1);
}

async function inputFatorial() {
  const answers = await inquirer.prompt([
    {
      name: 'x',
      type: 'input',
      message: 'valor de n: ',
      validate: validateFunc,
    },
  ]);

  const x = parseInt(answers.x, 10);

  const resultado = realizaFatoracao(x);

  console.log(resultado);
}

inputFatorial();
