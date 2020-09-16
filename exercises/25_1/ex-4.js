db.clientes.find({}).limit(1);

db.clientes.aggregate([
    {$match: {
        'endereco.uf': 'SC'
    }},
    {
      $group: {
        _id: '$endereco.uf',
        count: { $sum: 1 },
      },
    },
  ]).pretty();
