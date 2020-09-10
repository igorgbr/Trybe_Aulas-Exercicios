db.xmen.find({
  $and: [{ name: { $exists: true }, true_name: { $exists: true } }],
});
db.xmen.updateMany(
  {},
  {
    $currentDate: {
      lastUpdate: { $type: 'timestamp' },
    },
    $set: { power: 100 },
    $rename: { name: 'hero_name', true_name: 'full_name' },
  }
);
