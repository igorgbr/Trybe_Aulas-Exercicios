//Verifica se algum valor entre as 3 variaveis é par

function verficaPar(a, b, c){
    
    let soma = (a + b + c);
    if (soma % 2 == 0) {
        return true 
    } else  { 
        return false;
    }  
}

console.log(verficaPar(1, 2, 6))