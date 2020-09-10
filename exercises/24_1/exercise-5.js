db.movies.find({ title: 'Home Alone' });
db.movies.updateOne({ title: 'Home Alone' }, { $inc: { budget: 5 } });
