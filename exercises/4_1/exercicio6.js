//Recebe uma string com o nome de uma peça de xadres e retorna o movimento dessa peça

let peca = "Bispo";

let pecaFinal = peca.toLowerCase();

if (pecaFinal == "cavalo") {
    console.log("O " + pecaFinal + " anda e come em L.")
} else if (pecaFinal == "peão") {
    console.log("O " + pecaFinal + " anda 1 casa pra frente (2 casas na primeira jogada) e come na diagonal")
} else if (pecaFinal == "torre") {
    console.log("O " + pecaFinal + " anda e come qualquer casa pra frente pra tras e pras laterais")
} else if (pecaFinal == "rei") {
    console.log("O " + pecaFinal + " anda e come 1 casa em qualquer direção pra frente e pra tras")
} else if (pecaFinal == "rainha") {
    console.log("O " + pecaFinal + " anda e come em qualquer direção pra frente e pra tras.")
} else if (pecaFinal == "bispo") {
    console.log("O " + pecaFinal + " anda e come nas diagonais pra frente e pra tras.")
}

