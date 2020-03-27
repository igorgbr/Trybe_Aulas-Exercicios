//Calcula o lucro de um produto um valor absoluto com juro de 20% no caso de vender 1000 unidades

let valorProduto = 10;
let valorVenda = 12;

if ((valorProduto < 0) && (valorVenda < 0)){
    console.log("Valor invalido!")
} else {
    let valorAbsoluto = ((valorVenda - valorProduto) * 1.2) * 1000;
    console.log(valorAbsoluto)
}
