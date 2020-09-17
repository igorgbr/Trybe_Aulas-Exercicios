db.vendas
  .aggregate([
    { $unwind: '$itens' },
    {
      $match: {
        'itens.nome': 'QUEIJO PRATO',
      },
    },
    {
      $group: {
        _id: '$clienteId',
        total_consumido: {
          $sum: '$itens.quantidade',
        },
      },
    },
    {
      $sort: {
        total_consumido: -1,
      },
    },
    {
      $limit: 1,
    },
    {
      $lookup: {
        from: 'clientes',
        localField: '_id',
        foreignField: 'clienteId',
        as: 'cliente',
      },
    },
    {
      $unwind: '$cliente',
    },
    {
      $project: {
        NomeCliente: '$cliente.nome',
        uf: '$cliente.endereco.uf',
        totalConsumido: '$total_consumido',
        _id: 0,
      },
    },
  ])
  .pretty();
