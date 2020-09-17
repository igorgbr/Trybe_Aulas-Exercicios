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
    {$lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras'
    }
}
  ]).pretty();