//Calcula o lucro de um produto um valor absoluto com juro de 20% no caso de vender 1000 unidades

function calculaLucro(produto, venda) {
    if ((produto < 0) && (venda < 0)) {
        return 'valor invalido'
    } else {
        let valorAbsoluto = ((venda - produto) * 1.2) * 1000;
        return valorAbsoluto;
    }
    
}

console.log(calculaLucro(10, 15));