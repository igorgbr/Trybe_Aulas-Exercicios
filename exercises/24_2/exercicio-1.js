db.movies.find({ title: 'Batman' }).pretty();
db.movies.updateOne({ title: 'Batman' }, { $push: { category: 'superhero' } });
