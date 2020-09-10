db.movies.find({
  $and: [{ $or: [{ title: 'Home Alone' }, { title: 'Batman' }] }],
  imdbRating: { $lte: 17 },
});
db.movies.updateMany(
  {
    $and: [{ $or: [{ title: 'Home Alone' }, { title: 'Batman' }] }],
    imdbRating: { $lte: 17 },
  },
  { $set: { imdbRating: 17 } }
);
