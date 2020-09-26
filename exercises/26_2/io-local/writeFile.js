const fs = require('fs');

async function writingFiles() {
  await fs.writeFile('./meu-arquivo.txt', 'Igor s2 Sara', (err) => {
    if (err) {
      throw err;
    }
    console.log('Arquivo salvo');
  });
}


writingFiles()