db.xmen.find({ class: 'unknown' });
db.xmen.updateMany(
  { class: 'unknown' },
  {
    $currentDate: {
      lastUpdate: { $type: 'timestamp' },
    },
    $unset: { class: 'unknown' },
  }
);
