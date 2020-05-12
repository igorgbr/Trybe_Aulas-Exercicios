//Junta 2 arrays em um objeto

// const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const updateProducts = (listProducts, listPrices) => {
//     return listProducts.map((product, index) => ({[product]: listPrices[index]}
//         ));
// };

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);

//for each é generico 
// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros.map(numero => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

// const paresMenoresQueCinco = [];
// numeros.forEach(numero => {
//   if(numero < 5 && numero % 2 === 0) {
//     paresMenoresQueCinco.push(numero);
//   }
// })
// console.log(paresMenoresQueCinco); // Retorno: [2, 4]