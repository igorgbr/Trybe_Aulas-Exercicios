//Pega 3 valores e retorna o maior
function maior(a, b, c) {
    if ((a > b) && (a > c)) {
        return a;
    } else if((b > a) && (b > c)){
        return b;
    } else {
        return c;
    }
}

console.log(maior(40, 234, 233))