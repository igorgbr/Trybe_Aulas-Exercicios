const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('filename: ', (answer) => {
  const stream = fs.createReadStream(`./${answer}`);
  const form = new FormData();
form.append('file', stream);

    console.log(`loading: ${answer}`);
    const formHeaders = form.getHeaders();

    axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    console.log(response.status)
  })
  .catch((error) => {
    console.error(error)
  });

    rl.close();
});
