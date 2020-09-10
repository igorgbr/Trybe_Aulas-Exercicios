db.xmen.find({
  $and: [{ class: 'gama' }, { power: 300 }],
});
db.xmen.updateMany(
  {
    class: 'gama',
  },
  {
    $currentDate: {
      lastUpdate: { $type: 'timestamp' },
    },
    $max: { power: 300 },
  }
);
