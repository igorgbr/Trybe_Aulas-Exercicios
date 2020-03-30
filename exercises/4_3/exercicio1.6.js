//retorna o maior valor entre dois numeros
function maior(a, b) {
    if (a > b) {
        return a;
    } else if(b > a){
        return b;
    } else {
        return "valores iguais";
    }
}

console.log(maior(4, 4))