const express = require('express');
const plantController = require('./controller/plant');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', plantController.getPlants);
app.get('/sunny/:id', plantController.sunnyById);

app.get('/plant/:id', plantController.getPlantById);

app.delete('/plant/:id', plantController.deletePlantById);

app.put('/plant/:id', plantController.updatePlant);

app.post('/plant/', plantController.createPlant);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
