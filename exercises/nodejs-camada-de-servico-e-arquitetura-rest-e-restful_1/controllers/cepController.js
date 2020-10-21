const dataCep = require('../models/Cep');

const renderInput = async (_, res) => {
  return res.render('cep/index', { dados: null, mensagem: null });
};

/* const listCep = async (req, res) => {
  const { nameCep } = req.body;

  const nameTratado = nameCep.replace(/-/, '');
  console.log(nameCep, nameTratado);
  let dados = await dataCep.findDB(nameTratado);

  console.log('dados:', dados);

  if (dados.length === 0) {
    let newData = await dataCep.findCepAPI(nameCep);
    const dados = [newData];

    console.log('API:', dados[0].cep);

    const { cep, uf, cidade, bairro, logradouro } = dados[0];

    if (!cep || !uf || !cidade || !bairro || !logradouro) {
      const message = 'CEP Invalido';
      return res.render('cep/index', { dados, mensagem: message });
    }
    dataCep.create(cep, uf, cidade, bairro, logradouro);
    return res.render('cep/index', { dados, mensagem: null });
  }

  res.render('cep/index', { dados, mensagem: null });
}; */

const listCepMongo = async (req, res) => {
  const { nameCep } = req.body;
  const nameTratado = nameCep.replace(/-/, '');
  console.log(nameTratado);
  let dados = await dataCep.findDBMongo({ cep: nameTratado });

  console.log('dados:', dados);

  if (dados.length === 0) {
    let newData = await dataCep.findCepAPI(nameCep);
    const dados = [newData];

    console.log('API:', dados[0].cep);

    const { cep, uf, cidade, bairro, logradouro } = dados[0];

    if (!cep || !uf || !cidade || !bairro || !logradouro) {
      const message = 'CEP Invalido';
      return res.render('cep/index', { dados, mensagem: message });
    }

    dataCep.createMongo({
      cep: cep,
      uf: uf,
      cidade: cidade,
      bairro: bairro,
      logradouro: logradouro,
    });
    res.render('cep/index', { dados, mensagem: null });
  }
  res.render('cep/index', { dados, mensagem: null });
};

module.exports = {
  renderInput,
  listCepMongo,
};
