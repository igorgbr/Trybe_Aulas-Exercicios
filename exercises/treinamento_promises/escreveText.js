const fs = require('fs');

const startTime = Date.now();
let data = [];
let spaceOrNot = 0;
let space = '';

for (i = 0; i < Math.pow(10, 4); i++) {
  data.push(String.fromCharCode(Math.round(Math.random() * (120 - 40) + 40)));

  spaceOrNot = Math.round(Math.random() * 1);
  spaceOrNot === 1 ? (space = '') : (space = ' ');
  data.push(space);

  fs.writeFile(
    './meu-arquivo-teste.txt',
    data.join(''),
    { flag: 'w' },
    function (err) {
      if (err) throw err;
    }
  );
}

const finishTime = Date.now() - startTime;
console.log('Arquivo salvo em ' + finishTime + ' ms');
