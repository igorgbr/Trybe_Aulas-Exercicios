/* let readlineSync = require('readline-sync'); */
let inquirer = require('inquirer');

function validateFunc(input) {
  return !isNaN(parseFloat(input)) || 'número inválido';
}

async function inputIMC() {
  const perguntas = await inquirer.prompt([
    {
      name: 'altura',
      type: 'input',
      message: 'Informe a altura em metros: ',
      validate: validateFunc,
    },
    {
      name: 'massa',
      type: 'input',
      message: 'Informe a peso em kilos: ',
      validate: validateFunc,
    },
  ]);

  const massa = parseFloat(perguntas.massa);
  const altura = parseFloat(perguntas.altura);

  const imcResult = (imcTot = massa / Math.pow(altura, 2)).toFixed(2);

  console.log(`IMC: ${imcResult}`);

  if (imcResult < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }

  if (imcResult >= 18.5 && imcResult < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imcResult >= 25 && imcResult < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imcResult >= 30 && imcResult < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imcResult >= 35 && imcResult < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  if (imcResult >= 40) {
    console.log('Situação: Obesidade graus III e IV');
    return;
  }
}

inputIMC();
