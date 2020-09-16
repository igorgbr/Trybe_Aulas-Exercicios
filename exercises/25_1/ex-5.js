db.clientes.find({}).limit(1);

db.clientes.aggregate([
    {
      $group: {
        _id: '$sexo',
        count: { $sum: 1 },
      },
    },
  ]).pretty();
