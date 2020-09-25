const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  /* Retorna a resposta */
  res.send('Hello World!');
});

app.get('/ping', function (req, res) {
  /* Retorna a resposta */
  res.json({ message: 'pong' });
});

app.get('/hello', function (req, res) {
  /* Retorna a resposta */
  res.json({ message: 'recebido via GET' });
});

/* app.post('/hello', (req, res) => {
  const { nome } = req.body;
  console.log(`Hello ${nome}`);
}); */

app.post('/hello', (req, res) => {
  const { idade, nome } = req.body;
  /* Retorna a resposta */
  idade > 17
    ? res.status(200).json({ message: `Hello ${nome}` })
    : res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:idade', (req, res) => {
  const { idade, nome } = req.body;
  /* Retorna a resposta */
  res.json({ message: `seu nome é ${nome} e sua idade é ${idade}.` });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
