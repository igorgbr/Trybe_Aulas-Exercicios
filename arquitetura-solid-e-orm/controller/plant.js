const plantsModel = require('../model/plantsModel');

const getPlants = async (_, res) => {
  const plants = await plantsModel.defaultPlants;
  res.status(200).json(plants);
};

const getPlantById = async (req, res) => {
  const { id } = req.params;
  const plant = await plantsModel.defaultPlants.filter(
    (e) => e.id === Number(id)
  );

  plant.length != 0
    ? res.status(200).json(plant)
    : res.status(404).json({ message: 'unknown id' });
};

const deletePlantById = async (req, res) => {
  const { id } = req.params;

  const oldPlants = await plantsModel.defaultPlants;

  plantsModel.defaultPlants.splice(id - 1, 1);
  const newPlants = await plantsModel.defaultPlants;

  newPlants.length != oldPlants.length
    ? res.status(200).json(newPlants)
    : res.status(404).json({ message: 'Unknown Id or empty Data' });
};

const updatePlant = async (req, res) => {
  const { id } = req.params;
  const { breed, size, needSun, origin } = req.body;

  const plant = await plantsModel.updatePlant(
    Number(id),
    breed,
    size,
    needSun,
    origin
  );

  res.status(200).json(plant);
};

const createPlant = async (req, res) => {
  const { breed, size, needSun, origin } = req.body;

  const plant = await plantsModel.createPlant(breed, size, needSun, origin);

  res.status(200).json(plant);
};

const sunnyById = async (req, res) => {
  const { id } = req.params;
  const plant = await plantsModel.defaultPlants.filter(
    (e) => e.id === Number(id)
  );
  try {
    plant[0].needsSun === true
      ? res.status(200).json(plant)
      : res
          .status(500)
          .json({ message: `The ${plant[0].breed} don't need sun.` });
  } catch (_) {
    res.status(404).json({message: 'data empty'});
  }
};

module.exports = {
  getPlants,
  getPlantById,
  deletePlantById,
  updatePlant,
  createPlant,
  sunnyById,
};
