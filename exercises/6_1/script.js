let inputEstados = document.querySelector('#estados');
let inputData = document.querySelector('#data-inicio').DatePickerX.init('yyyy/mm/dd');

let estados = ['AC', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for(let i = 0; i < estados.length; i+=1) {
    let opcao = document.createElement('option');
    opcao.innerHTML = estados[i];
    inputEstados.appendChild(opcao);
};

