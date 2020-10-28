const express = require('express');
const cepController = require('./controllers/cepController');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/cep', cepController.renderInput)
app.post('/cep', cepController.listCepMongo)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});