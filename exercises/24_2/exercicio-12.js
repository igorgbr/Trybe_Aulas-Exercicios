db.movies.updateOne(
  { title: 'Batman', 'cast.character': 'Batman' },
  {
    $addToSet: {
      'cast.$.actor': {
        $each: ['Michael Keaton', 'Val Kilmer', 'George Clooney'],
    
      },
    },
  }
);
