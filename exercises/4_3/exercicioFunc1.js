//Verifica se uma palavra é palindromo
function checaPalindromo(palavra){
    return palavra == palavra.split('').reverse().join('');
}

console.log(checaPalindromo("original"));  