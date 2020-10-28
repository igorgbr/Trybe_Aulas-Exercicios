const express = require('express');
const categoriesController = require('./controllers/categoriesController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/jokes', categoriesController.renderJoke);

app.get('/jokes/:category', categoriesController.renderCategoryJoke);

app.get('/categories', categoriesController.listCategories);

app.get('/', (_, res) => res.redirect('/categories'));

app.listen(3000, () => console.log('listening here'));
