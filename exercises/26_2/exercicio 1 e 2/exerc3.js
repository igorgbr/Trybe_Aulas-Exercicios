const readline = require('readline');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function interface() {
  rl.question('WRITE THE FILE NAME: ', async function (resp) {
    // TODO: Log the answer in a database
    console.log(`opening...........       ${resp}`);
    const startTime = Date.now(); //conta o momento em que o arquivo é aberto
    try {
        const file = await readFile(path.resolve(__dirname, resp));
        console.log(file.toString('utf8'));
       
        console.log(`Arquivo de ${file.byteLength} bytes`)
        const finishTime = Date.now() - startTime; // subtrai o moment oem que o arquivo é aberto até ele ser carregado
        console.log(`em ${finishTime} ms`)

    } catch (err) {
        console.error('arquivo nao existe')
    }

    rl.close();
  });
}

interface();