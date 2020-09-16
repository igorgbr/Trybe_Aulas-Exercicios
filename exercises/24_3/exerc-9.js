//Retorne os filmes da categoria adventure e com ratings maior do que 103,
//exibindo apenas os campos title, ratings e category.

db.movies.find(
  {
    ratings: { $gt: 103 },
    category: 'adventure',
  },
  { title: 1, _id: 0 }
);
