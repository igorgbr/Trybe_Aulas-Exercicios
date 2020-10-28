const Author = require('../models/Author');
const authorService = require('../services/authorService');

const listAuthors = async (req, res) => {
  // Já vamos voltar para adicionar a lógica aqui
  const authors = await Author.getAll();

  res.render('authors/index', { authors });
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (author) {
    res.render('authors/show', { author });
  } else {
    res.status(404).render('404');
  }
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await authorService.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
};
