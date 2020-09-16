db.clientes.find({}).limit(1);
db.produtos.find({}).limit(1);
db.vendas.find({}).limit(1);

db.vendas.find({},{_id:0, status: 1});

db.vendas.aggregate([
    {$match: {
        status: {$in: ['ENTREGUE', 'EM SEPARACAO']}
    }},
    {
        $group: {
            _id: {cliente: '$clienteId'},
            total: {$sum:'$valorTotal'}
        }
    },
    {$sort: {
        total: -1
    }},
    {$limit: 5},
    {$project: {
        _id: 0,
        cliente: '$_id.cliente',
        total: 1
    }}
  ]).pretty();

  