db.movies.find({ title: 'Batman' });
db.movies.updateOne({ title: 'Batman' }, { $max: { imdbRating: 7.7 } });
