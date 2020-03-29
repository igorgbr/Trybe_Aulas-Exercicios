let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

let posicaoPecaLinha = 6;
let posicaoPecaColuna = 4;

let ataqueFeito = false;


if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueFeito = true;
}

//Diagonal superior direita
for(let i = 1; i < 8; i +=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaLinha + i;

    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha){
        ataqueFeito = true;
    }
}

    //Diagona inferior esquerda
    for(let i = 1; i < 8; i +=1) {
        let linhaRainha = posicaoRainhaLinha - i;
        let colunaRainha = posicaoRainhaLinha - i;
    
        if (linhaRainha < 1 || colunaRainha < 1) {
            break;
        }
    
        if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha){
            ataqueFeito = true;
        }
    }

        //Diagona superior esquerda
        for(let i = 1; i < 8; i +=1) {
            let linhaRainha = posicaoRainhaLinha + i;
            let colunaRainha = posicaoRainhaLinha - i;
        
            if (linhaRainha > 8 || colunaRainha < 1) {
                break;
            }
        
            if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha){
                ataqueFeito = true;
            }
        }


        //Diagona inferior direita
        for(let i = 1; i < 8; i +=1) {
            let linhaRainha = posicaoRainhaLinha - i;
            let colunaRainha = posicaoRainhaLinha + i;
        
            if (linhaRainha < 1 || colunaRainha > 8) {
                break;
            }
        
            if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha){
                ataqueFeito = true;
            }
        }
console.log(ataqueFeito);