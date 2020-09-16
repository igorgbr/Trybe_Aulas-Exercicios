db.movies.find({}).pretty();
db.movies.find({ category: { $all: ['action', 'adventure'] } });
