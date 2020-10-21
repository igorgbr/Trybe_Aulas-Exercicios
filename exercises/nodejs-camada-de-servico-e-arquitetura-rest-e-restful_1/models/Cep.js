const { connection } = require('./connection');
const fetch = require('node-fetch');

const getAll = async () =>
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
    );

const create = async (cep, uf, cidade, bairro, logradouro) =>
  connection().then((db) =>
    db
      .getTable('dados_cep')
      .insert(['cep', 'uf', 'cidade', 'bairro', 'logradouro'])
      .values([cep, uf, cidade, bairro, logradouro])
      .execute()
  );

const findDB = async (cepUser) =>
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
  getAll,
  findDB,
  findCepAPI,
  create,
};
