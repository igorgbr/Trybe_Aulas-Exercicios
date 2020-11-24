const express = require('express');
const multer = require('multer');

const app = express();

/* Definindo nossa pasta pública */
app.use(express.static(__dirname + '/uploads'));

/* destination: destino do nosso arquivo
   filename: nome do nosso arquivo.
   No caso, vamos dar o nome que vem na
   propriedade originalname, ou seja,
   o mesmo nome que o arquivo tem no
   computador do usuário */
   const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname)
    }
  });
  
  /* Cria uma instância do multer configurada */
  const upload = multer({ storage });
  
 app.get('/ping', (req, res) => res.send('pong!'));
  
 app.post('/files/upload', upload.single('file'), (req, res) =>
   res.send().status(200)
 );
  
 const PORT = 3000;
 app.listen(PORT, () => console.log(`Running at port: ${PORT}`));