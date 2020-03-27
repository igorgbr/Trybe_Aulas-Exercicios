let salarioBruto = 5000;
let salarioBase;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 0.8) / 10;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 0.9) / 10;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 1.1) / 10;
} else {
  salarioBase = salarioBruto - 570.88;
}

// Desconto do IR no salario base
if (salarioBase <= 1903.98) {
  let descIR = 0;
  let salarioLiq = salarioBase - descIR;
  console.log(salarioLiq);
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  let descIR = (salarioBase * 7.5) / 100 - 142.8;
  let salarioLiq = salarioBase - descIR;
  console.log("Salario Liquido: R$ " + salarioLiq);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  let descIR = (salarioBase * 15) / 100 - 354.8;
  let salarioLiq = salarioBase - descIR;
  console.log("Salario Liquido: R$ " + salarioLiq);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  let descIR = (salarioBase * 22.5) / 100 - 636.13;
  let salarioLiq = salarioBase - descIR;
  console.log("Salario Liquido: R$ " + salarioLiq);
} else {
  let descIR = (salarioBase * 27.5) / 100 - 869.36;
  let salarioLiq = salarioBase - descIR;
  console.log("Salario Liquido: R$ " + salarioLiq);
}
