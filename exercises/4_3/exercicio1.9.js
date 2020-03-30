//Verifica se algum valor entre as 3 variaveis é impar

function verificaImpar(a, b, c){
    let soma = (a + b + c);

    if (soma % 2 != 0){
        return true;
    } else {
        return false;
    }
};

console.log(verificaImpar(20, 21, 57));