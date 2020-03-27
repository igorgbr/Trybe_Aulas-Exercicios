let porcentagem = -150;

if ((porcentagem > 100) || (porcentagem < 0)) {
    console.log("Valor Invalido")
}else if (porcentagem >= 90)  {
    console.log("Nota -> A")
} else if (porcentagem >= 80) {
    console.log("Nota -> B")
} else if (porcentagem >= 70) {
    console.log("Nota -> C")
} else if (porcentagem >= 60) {
    console.log("Nota -> D")
} else if (porcentagem >= 50) {
    console.log("Nota -> E")
} else if (porcentagem < 50)  {
    console.log("Nota -> F")
}