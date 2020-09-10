db.movies.find({ title: 'Batman' });
db.movies.updateOne({ title: 'Batman' }, { $mul: { imdbRating: 4 } });