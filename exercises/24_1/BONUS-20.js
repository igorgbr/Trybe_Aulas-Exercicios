db.xmen.find({
  $and: [{ occupation: 'Junior Staff' }, { area: ['outside'] }],
});

db.xmen.updateMany(
  {
    $and: [{ occupation: 'Junior Staff' }, { area: { $exists: false } }],
  },
  {
    $currentDate: {
      lastUpdate: { $type: 'timestamp' },
    },
    $set: { area: ['outside'] },
  }
);
