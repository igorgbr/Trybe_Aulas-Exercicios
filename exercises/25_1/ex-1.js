db.clientes.find({}).limit(1)
db.clientes.aggregate([
    {$match: {
        sexo: 'MASCULINO'
    }}
]).pretty();