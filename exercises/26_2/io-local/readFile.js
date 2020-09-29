const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('meu-arquivo.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);
    return readFilePromise('file2.txt');
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });