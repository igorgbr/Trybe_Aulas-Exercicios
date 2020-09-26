const express = require('express');
const app = express();
const fs = require('fs').promises;
const router = express.Router();
const path = require('path');

//dependencias
app.use(express.json());

const readSimpsonsFile = async () => {
    const content = await fs.readFile(path.resolve(__dirname, '.', 'simpsons.json'));
    return JSON.parse(content.toString('utf-8'));
  };


  const writeSimpsonsFile = async (dados) => (
    fs.writeFile(
      path.resolve(__dirname, '.', 'simpsons.json'),
      JSON.stringify(dados),
      (err) => {
        if (err) throw err;
      }
    ));


  //input e output

  app.get('/', async function (req, res) {
    /* Retorna a resposta */
    const result = await readSimpsonsFile();
    res.status(200).send(result)
  });

  app.use(function (err, req, res, next) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
  });

  app.get('/simpsons/:id', async function (req, res) {
    /* Retorna a resposta */
    const result = await readSimpsonsFile();
    const {id} = req.params;
    const personagens = result.filter((value) =>  value.id === id)
    res.status(200).send(personagens);
  });

  app.post('/simpsons/', async (req, res) => {
    const { id, name } = req.body;
    /* Retorna a resposta */
    if (!id || !name) return res.status(400);
    
    const result = await readSimpsonsFile();
    const novoResult = [...result, {id, name}];
    await writeSimpsonsFile(novoResult)
    return res.status(200).json({ message: "funcionou" });
  });


  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });