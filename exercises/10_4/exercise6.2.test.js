const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];

  const findAnimalsByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.age === age);
        if (arrayAnimals.length !== 0) {
            console.log(arrayAnimals)
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não possui animal com essa idade' });
      }, 100);
    })
    );

    const getAnimal = (age) => {
        return findAnimalsByAge(age)
          .then(animal => animal)
      }

    // describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const objAnimal = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getAnimal(1)).resolves.toEqual(objAnimal);
    });
  });

    describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getAnimal(10)).rejects.toEqual({ error: 'Não possui animal com essa idade' })
    })
});