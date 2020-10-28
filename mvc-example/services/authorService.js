const nodemailer = require('nodemailer');
const Author = require('../models/Author');


const create =  async (firstName, middleName, lastName) => {
  /* Criamos o autor com o model */
  const teste =  await Author.create(firstName, middleName, lastName);

  console.log(teste)
  /* Criamos uma nova instância do nodemailer, que fará o envio do email */
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'd83c929584509e' /* Coloque suas credenciais do Mailtrap aqui */,
      pass: 'd8286155e9e54a',
    },
  });

  /* Definimos as opções para envio do email */
  const mailOptions = {
    from: 'mario@mushroomkingdom',
    to: 'bowser@mushroomkingdom.com',
    subject: "It's a-me, Mario!",
    text: `Olá! ${teste.name} Boas vindas à nossa plataforma.`,
  };

  /* Realizamos o envio do email, passando um callback que escreverá no console o resultado do envio */
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Não foi possível enviar email: ', err);
        return reject(err);
      }

      console.log('Email enviado com sucesso: ', info);
      resolve(info);
    });
  });
};

module.exports = {
  create
};