const fraseLeng = (x) => {
    const arrFrase = x.split(' ');
    let word = arrFrase[0];

    for(i in arrFrase){
        if (word.length < arrFrase[i].length) {
            word = arrFrase[i];
        }
    }
    return word;
  };
  
  let texto = 'Antônio foi no banheiro e não sabemos o que aconteceu';
  console.log(fraseLeng(texto));