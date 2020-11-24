const defaultPlants = [
  {
    id: 1,
    breed: 'Bromelia',
    needsSun: false,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: 'Orquidea',
    size: 99,
    needsSun: false,
    origin: 'Brazil',
  },
  {
    id: 3,
    breed: 'Margarida',
    size: 75,
    needsSun: true,
    origin: 'Inglaterra',
  },
];

const updatePlant = async (id, breed, size, needsSun, origin) => {
  defaultPlants.splice(id - 1, 1);
  const newPlant = {
    id,
    breed,
    size,
    needsSun,
    origin,
  };

  defaultPlants.push(newPlant);
  return defaultPlants.sort((a, b) => a.id - b.id);
};

const createPlant = async (breed, size, needSun, origin) => {
  const newPlant = {
    id: defaultPlants.length + 1,
    breed,
    size,
    needSun,
    origin,
  };
  defaultPlants.push(newPlant);
  return defaultPlants.sort((a, b) => a.id - b.id);
};

module.exports = {
  defaultPlants,
  updatePlant,
  createPlant,
};
