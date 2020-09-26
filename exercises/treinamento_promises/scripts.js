/* function sumNumbers() { //Função Sincrona
  let result = 1 + 1;

  if (result == 2) {
    succesCallback();
  } else {
    errorCallback();
  }
}

function succesCallback() {
  console.log('yeah 2!');
}

function errorCallback() {
  console.log('vixi');
}

sumNumbers(); */

// -------------------------------------------------------------

/* let p = new Promise((reject, resolve) => { // função assincrona
  let a = 1 + 1;
  if (a == 2) {
    resolve('succes!');
  } else {
    reject('failed');
  }
});

p.then((message) => {
  console.log('Yrra' + message);
}).catch((err) => {
  console.log('arghhhh' + err);
}); */

// -------------------------------------------------------------------------------------------------

/* const betterDeveloper = 'sara';

function whoIsBetterCallback(callback, errorCallback) { // função sincrona para transformar em promisse
  if (betterDeveloper != 'sara' && betterDeveloper != 'igor') {
    errorCallback({
      name: 'this is wrong',
      message: betterDeveloper + '? really',
    });
  } else {
    callback({
      name: betterDeveloper,
      message: 'nerds are the best!',
    });
  }
}

whoIsBetterCallback(
  (result) => {
    console.log(result.name + '? Ye ' + result.message);
  },
  (error) => {
    console.log(error.name + ' ' + error.message);
  }
); */

// -------------------------------------------------------------------------------------

// mesma função anterior transformanda em Promisse
/* const betterDeveloper = 'Charmander';

function whoIsBetterCallback(callback, errorCallback) {

  return new Promise((resolve, reject) => {
    if (betterDeveloper != 'sara' && betterDeveloper != 'igor') {
      reject({
        name: 'this is wrong',
        message: betterDeveloper + '? really',
      });
    } else {
      resolve({
        name: betterDeveloper,
        message: 'nerds are the best!',
      });
    }
  });
}

whoIsBetterCallback()
.then((result) => {
    console.log(result.name + '? Ye ' + result.message);
  }).catch((error) => {
    console.log(error.name + ' ' + error.message);
  }); */
