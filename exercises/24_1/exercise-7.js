db.movies.find({ title: 'Batman' });
db.movies.updateOne(
  { title: 'Batman' },
  { $rename: { budget: 'estimatedBudget' } }
);
