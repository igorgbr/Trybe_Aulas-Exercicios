const { connection, connectionMongo } = require('./connection');
const fetch = require('node-fetch');

//Acessa todos os dados do MONGO
const getAllMongo = async () =>
  connectionMongo()
    .then((db) => db.collection('data_cep').find().toArray())
    .then((data) =>
      data.map(({ _id, cep, uf, bairro, logradouro }) => ({
        id: _id,
        cep,
        uf,
        bairro,
        logradouro,
      }))
    )
    .then((e) => console.log(e));

//Acessa todos os dados do MySQL
/* const getAll = async () =>
  connection()
    .then((db) =>
      db
        .getTable('dados_cep')
        .select(['id', 'cep', 'uf', 'bairro', 'logradouro'])
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((data) =>
      data.map(([id, cep, uf, bairro, logradouro]) => ({
        id,
        cep,
        uf,
        bairro,
        logradouro,
      }))
    ); */

// ----------------------- ACIMA PARA IMPLEMENTAÇÕES FUTURAS ----------------------------

/* const create = async (cep, uf, cidade, bairro, logradouro) =>
  connection().then((db) =>
    db
      .getTable('dados_cep')
      .insert(['cep', 'uf', 'cidade', 'bairro', 'logradouro'])
      .values([cep, uf, cidade, bairro, logradouro])
      .execute()
  ); */

const createMongo = async (obj) =>
  connectionMongo().then((db) =>
    db.collection('data_cep').insertOne(obj).toArray()
  );

/* const findDB = async (cepUser) =>
  connection()
    .then((db) =>
      db
        .getTable('dados_cep')
        .select(['id', 'cep', 'uf', 'cidade', 'bairro', 'logradouro'])
        .where('cep = :cep')
        .bind('cep', cepUser)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((data) =>
      data.map(([id, cep, uf, cidade, bairro, logradouro]) => ({
        id,
        cep,
        uf,
        cidade,
        bairro,
        logradouro,
      }))
    ); */

const findDBMongo = async (cepUser) =>
  connectionMongo()
    .then((db) => db.collection('data_cep').find(cepUser).toArray())
    .then((data) =>
      data.map(({ _id, cep, uf, cidade, bairro, logradouro }) => ({
        id: _id,
        cep,
        uf,
        cidade,
        bairro,
        logradouro,
      }))
    );

const CEP_LA_API = 'http://cep.la';

const headers = {
  Accept: 'application/json',
};

const findCepAPI = async (cep) => {
  const response = await fetch(`${CEP_LA_API}/${cep}`, { headers });
  const cepData = await response.json();

  if (Array.isArray(cepData) && cepData.length === 0) {
    throw new Error('CEP não encontrado');
  }
  return cepData;
};

module.exports = {
  findCepAPI,
  getAllMongo,
  findDBMongo,
  createMongo,
};
