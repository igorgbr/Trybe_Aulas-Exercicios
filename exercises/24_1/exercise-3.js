db.movies.find({ title: 'Home Alone' });
db.movies.updateOne(
    { title: 'Home Alone' },
    {
      $set: {
        budget: 15,
        imbdRating: 5.5
      }
    }
  );