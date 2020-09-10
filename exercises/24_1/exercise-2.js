db.movies.find({ title: 'Godzilla' });
db.movies.updateOne({ title: 'Godzilla' }, { $set: { budget: 1 } });