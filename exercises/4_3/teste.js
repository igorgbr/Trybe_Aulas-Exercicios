let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let MaiorQtdLetra = 0;
let palavra = '';
let maiorPalavra = '';

for(i = 0; i < array.length; i++){
    palavra = array[i];
    qtdLetra = palavra.length;

    if(qtdLetra > MaiorQtdLetra){
        MaiorQtdLetra = qtdLetra;
        maiorPalavra = palavra;
    }
}
console.log(maiorPalavra)


