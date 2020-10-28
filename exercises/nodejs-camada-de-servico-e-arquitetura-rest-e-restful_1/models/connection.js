const mysqlx = require('@mysql/xdevapi');
const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connectionMongo = () => {
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('db_ceps'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

let schema; /* Aqui entra a variável que salva à conexão, começa como undefined */
const connection = () => {
  return schema /* Se schema já existir: */
    ? Promise.resolve(schema) /* Retorna o schema numa Promise: */
    : mysqlx
        .getSession({
          /* Se não, criamos uma nova conexão */ user: 'root',
          password: '',
          host: 'localhost',
          port: 33060,
          schema: 'db_ceps',
        })
        .then((session) => {
          /* Quando terminamos de abrir a conexão: */
          schema = session.getSchema(
            'db_ceps'
          ); /* Armazenamos a conexão na variável `schema`*/
          return schema; /* E retornamos o schema de dentro da Promise */
        })
        .catch((err) => {
          /* Caso um erro ocorra: */
          console.error(err); /* Exibimos o erro no console */
          process.exit(1); /* E encerramos o processo */
        });
};

module.exports = { connection, connectionMongo };
