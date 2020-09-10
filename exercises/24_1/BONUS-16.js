db.xmen.find({
  $and: [{ $or: [{ class: 'omega' }, { class: 'gama' }], power: { $lt: 500 } }],
});
db.xmen.updateMany(
  {
    $and: [
      { $or: [{ class: 'omega' }, { class: 'gama' }], power: { $lt: 500 } },
    ],
  },
  {
    $currentDate: {
      lastUpdate: { $type: 'timestamp' },
    },
    $set: { power: 500 },
  }
);
