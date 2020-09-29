const Joke = require('../models/joke');

const listJokes = async (_, res) => {
  const jokes = await Joke.getJokes();

  console.log(jokes);

  return res.render('jokeView', { jokes });
};

module.exports = {
  listJokes,
};
