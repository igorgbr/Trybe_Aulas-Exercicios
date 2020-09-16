db.movies.find({ 'cast.actor': 'Daniel Stern' }, {});

db.movies.updateOne(
  { title: 'Home Alone', 'cast.actor': 'Daniel Stern' },
  { $set: { 'cast.$.character': 'Marv' } }
);
