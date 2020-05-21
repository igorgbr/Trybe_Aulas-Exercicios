function funcCallback() {
    return new Promise((resolve, reject) => {

        const arr = [];
        for(i = 0; i <= 10; i++){
            arr[i] =+ Math.floor(Math.random() * 50);
        } // cria um array de 10 elementos com valores aleatorio de 0 a 50
        let total = arr.map(elemento => elemento = Math.pow(elemento, 2)).reduce((acc, numero) => acc + numero, 0); // eleva cada elemento ao quadrado, soma e guarda o resultado na variavel TOTAL
        const divArr = [2, 3, 5, 10];
        const resultArr = divArr.map(num => total / num); // pega o valor e divide pelos valores passados
        (total < 8000) ? resolve(resultArr) : reject('É mais de oito mil! Essa promise deve estar quebrada!'); // retorna RESOLVE ou REJECT
    })
}
async function doTheJob(){
    try{
        const resp = await funcCallback();
        console.log(resp.reduce((acc, curr) => acc + curr, 0));
    } catch (error){
        console.log(error);
    }
}
doTheJob()
// funcCallback()
// .then((response) => console.log(response))
// .catch((error) => console.log(error))