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
  ]).pretty();
