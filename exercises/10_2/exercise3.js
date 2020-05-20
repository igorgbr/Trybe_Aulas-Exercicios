const getPlanet = (callback) => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    
    const message = ("Returned planet: ", mars);
    callback(message);
  };
  
  setTimeout (() => console.log(getPlanet()), 4000) // imprime Marte depois de 4 segundos
  