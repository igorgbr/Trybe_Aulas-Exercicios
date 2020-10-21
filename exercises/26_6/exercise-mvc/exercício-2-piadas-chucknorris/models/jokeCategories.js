const axios = require('axios');

const URL = 'https://api.chucknorris.io/jokes/categories';
const URLRANDOM = 'https://api.chucknorris.io/jokes/random';

async function getCategories() {
  return (await axios(URL)).data;
}

async function getJokes() {
  return (await axios(URLRANDOM)).data.value;
}

async function getCategorieJokes(categorie) {
  return (await axios(`https://api.chucknorris.io/jokes/random?category=${categorie}`)).data.value;
}


module.exports = { getCategories, getJokes, getCategorieJokes };
