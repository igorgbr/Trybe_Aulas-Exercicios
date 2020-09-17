db.clientes.aggregate([
    {
      $addFields: {
        Idade: {
          $floor: {
            $divide: [
              { $subtract: ['$$NOW', '$dataNascimento'] },
              { $multiply: [86400000, 365] },
            ],
          },
        },
      },
    },
    {
      $match: {
        Idade: { $gte: 18, $lte: 25 },
      },
    },
    {$count: 'totalInformado'}
  ]).pretty();
  