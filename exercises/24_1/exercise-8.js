db.movies.find({ title: 'Home Alone' });
db.movies.updateOne(
  { title: 'Home Alone' },
  { $min: { budget: 5} }
);