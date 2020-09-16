db.clientes.find({}).limit(1);
db.produtos.find({}).limit(1);
db.vendas.find({}).limit(1);

db.vendas.find({}, { _id: 0, status: 1 });

db.vendas.aggregate([
    {
      $group: {
        _id: '$clienteId' ,
        totalCompras: { $sum: 1},
      },
    },
    {$match: {
        totalCompras: { $gt: 5}
    }},
    {$count: 'clientes'} 
  ]).pretty();
  