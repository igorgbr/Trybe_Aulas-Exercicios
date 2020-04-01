//Dois objetos com a mesma estrutura recebem valores diferentes alterando a ultima propriedade.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

  let info2 = {
    personagem: " e Tio Patinhas",
    origem: " e e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: " e O último MacPatinhas ",
    recorrente: "Ambos recorrentes",
  };

 
for (let Key in info,info2) {
    info.recorrente = '';
    console.log(info[Key], info2[Key])
};