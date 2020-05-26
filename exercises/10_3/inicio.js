let pontos = 0;

const balao;
const jogador = 'nome';

function tocarBalao () {
    return jogador.touch(balao);
}

if(tocarBalao() == true) {
    pontos += 1;
} else {
    pontos -= 1;
}

