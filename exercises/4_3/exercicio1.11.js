//calculadora de salaário liquido após desconto de IR

function calculaLiquido(bruto){
    let base;
    if (bruto <= 1556.94) {
        ase = bruto - (bruto * 0.8) / 10;
      } else if (bruto >= 1556.95 && bruto <= 2594.92) {
        base = bruto - (bruto * 0.9) / 10;
      } else if (bruto >= 2594.93 && bruto <= 5189.82) {
        base = bruto - (bruto * 1.1) / 10;
      } else {
        base = bruto - 570.88;
      }

      if (base <= 1903.98) {
        let descIR = 0;
        return salarioLiq = base - descIR;
      } else if (base >= 1903.99 && base <= 2826.65) {
        let descIR = (base * 7.5) / 100 - 142.8;
        let salarioLiq = base - descIR;
        return "Salario Liquido: R$ " + salarioLiq;
      } else if (base >= 2826.66 && base <= 3751.05) {
        let descIR = (base * 15) / 100 - 354.8;
        let salarioLiq = base - descIR;
        return "Salario Liquido: R$ " + salarioLiq;
      } else if (base >= 3751.06 && base <= 4664.68) {
        let descIR = (base * 22.5) / 100 - 636.13;
        let salarioLiq = base - descIR;
        return "Salario Liquido: R$ " + salarioLiq;
      } else {
        let descIR = (base * 27.5) / 100 - 869.36;
        let salarioLiq = base - descIR;
        return "Salario Liquido: R$ " + salarioLiq;
      }
}

console.log(calculaLiquido(2000))