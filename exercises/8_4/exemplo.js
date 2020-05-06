const assert = require('assert');

let validaMult = (n) => {
    for(let i = 0; i <= n.length; i++){
        if (n[i] % 3 === 0) return false;
        if (n[i] % 5 === 0) return false;
        if (n[i] % 7 === 0) return false;
        if (n[i] % 11 === 0) return false;
    }
    return true;
}

let arrayExemple = [];
for(let i = 0; i <= 20; i++){
    arrayExemple.push(i);
}

assert.strictEqual(validaMult(arrayExemple), false, 'Deve retornar false')