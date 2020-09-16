db.clientes.find({}).limit(1);
db.produtos.find({}).limit(1);
db.vendas.find({}).limit(1);

db.vendas.find({}, { _id: 0, status: 1 });

db.vendas.aggregate([
    {
      $match: {
        dataVenda: {
          $gte: ISODate('2020-01-01'),
          $lte: ISODate('2020-03-31'),
        },
      },
    },
    {
      $lookup: {
        from: 'clientes',
        localField: 'clientId',
        foreignField: 'clientId',
        as: 'dados_cliente',
      },
    },
    { $unwind: '$dados_cliente' },
    {$group: {
        _id: {uf: '$dados_cliente.endereco.uf'},
        totalVendas: {$sum: 1}
    }},
    {$sort: {
        totalVendas: -1
    }},
    {$limit: 3},
    {$project: {
        _id: 0,
        totalVendas: 1,
        uf: '$_id.uf'

    }}
  ]).pretty();
