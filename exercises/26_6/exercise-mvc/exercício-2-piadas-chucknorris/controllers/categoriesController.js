const jokeCategories = require('../models/jokeCategories');

const listCategories = async (_, res) => {
  const categories = await jokeCategories.getCategories();
  console.log(categories);

  res.render('index', { categories });
};

const renderJoke = async (_, res) => {
    const joke = await jokeCategories.getJokes();
    console.log(joke);
  
    res.render('joke', { joke });
  };

  const renderCategoryJoke = async (req, res) => {
    const { category } = req.params;
    const joke = await jokeCategories.getCategorieJokes(category);
    console.log(joke);
  
    res.status(200).render('jokes/index', { joke, category });
  };


module.exports = {
  listCategories,
  renderJoke,
  renderCategoryJoke
};
