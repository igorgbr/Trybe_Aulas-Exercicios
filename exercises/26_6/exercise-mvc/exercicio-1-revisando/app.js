const express = require('express');
const bodyParser = require('body-parser');
const jokeController = require('./controller/jokeController.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', jokeController.listJokes);

app.listen(3001, () => {
  console.log('escutando porta 3001');
});
