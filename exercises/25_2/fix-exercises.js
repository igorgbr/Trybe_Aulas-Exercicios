// preço total de cada produto considerando taxa e preço de compra
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        total_price: { $add: ['$purchase_price', '$taxes'] },
      },
    },
  ])
  .pretty();

//Retorna o lucro arrendodado pra cima
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        Lucro: {
          $ceil: {
            $subtract: ['$sale_price', { $add: ['$purchase_price', '$taxes'] }],
          },
        },
      },
    },
  ])
  .pretty();

//menor inteiro relativo a preço de venda
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        menor_inteiro: { $floor: '$sale_price' },
      },
    },
  ])
  .pretty();

// valor absoluto
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        Lucro: {
          $abs: {
            $ceil: {
              $multiply: [
                {
                  $subtract: [
                    { $add: ['$purchase_price', '$taxes'] },
                    '$sale_price',
                  ],
                },
                -1,
              ],
            },
          },
        },
      },
    },
  ])
  .pretty();

//valor total em estoque
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        total_estoque: { $multiply: ['$sale_price', '$quantity'] },
      },
    },
  ])
  .pretty();

// lucro total de cada produto em estoque
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        Lucro_Total: {
          $multiply: [
            {
              $ceil: {
                $multiply: [
                  {
                    $subtract: [
                      { $add: ['$purchase_price', '$taxes'] },
                      '$sale_price',
                    ],
                  },
                  -1,
                ],
              },
            },
            '$quantity',
          ],
        },
      },
    },
  ])
  .pretty();

// Forma simplificada de calcular com desconto
db.products
  .aggregate([
    {
      $project: { _id: 0, valor_desconto: { $multiply: ['$sale_price', 0.5] } },
    },
  ])
  .pretty();

// Forma com regra de 3
db.products
  .aggregate([
    {
      $project: {
        _id: 0,
        valor_desconto: { $divide: [{ $multiply: ['$sale_price', 50] }, 100] },
      },
    },
  ])
  .pretty();

  // cria um novo campo com o valor total do estoque
db.products.aggregate([
    {
      $addFields: {
        totalStock: {
          $multiply: ['$sale_price', '$quantity'],
        },
      },
    },
  ]).pretty();
