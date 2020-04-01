//imprime todas os valores das chaves dos objetos
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

  for (Key in info) {
    console.log(info[Key])
  }