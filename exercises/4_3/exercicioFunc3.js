//retorna o menor valor de um array 
function menorNum(){  
    let menorNum = 0;

    for(i = 0; i < array.length; i++){
        if (array[i] < menorNum){
            menorPos = array.indexOf(menorNum = array[i])
        }
    }
    return menorPos;
}
    let array = [2, 4, 6, 7, 10, 0, -3]
    console.log(menorNum(array))
