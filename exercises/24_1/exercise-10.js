db.movies.find({ title: 'Home Alone' });
db.movies.updateOne(
  { title: 'Home Alone' },
  {
    $currentDate: {
      lastUpdate: { $type: 'timestamp' },
    },
  }
);
