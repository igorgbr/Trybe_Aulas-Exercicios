//Retorne todos os filmes com ratings entre 64 e 105 e que é divisível por 9,
//exibindo apenas os campos title e ratings.
db.movies.find(
  {
    ratings: { $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] } },
  },
  { title: 1, ratings: 1, _id: 0 }
);
