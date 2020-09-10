db.movies.find({ title: 'Batman' });
db.movies.updateOne({ title: 'Batman' }, { $inc: { imdbRating: 2 } });