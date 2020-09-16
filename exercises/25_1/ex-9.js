db.clientes.find({}).limit(1);
db.produtos.find({}).limit(1);
db.vendas.find({}).limit(1);

db.vendas.find({}, { _id: 0, status: 1 });

db.vendas
  .aggregate([
    {
      $match: {
        status: { $in: ['ENTREGUE', 'EM SEPARACAO'] },
        dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31') },
      },
    },
    {
      $group: {
        _id: { cliente: '$clienteId' },
        total: { $sum: '$valorTotal' },
      },
    },
    {
      $sort: {
        total: -1,
      },
    },
    { $limit: 10 },
    {
      $project: {
        _id: 0,
        cliente: '$_id.cliente',
        total: 1,
      },
    },
  ])
  .pretty();
