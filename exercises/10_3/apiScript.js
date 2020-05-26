const API_URL = 'https://icanhazdadjoke.com/';

const appendAlberto = (joke) => {
  let jokerContainer = document.querySelector('#jokeContainer')
  // let ul = document.querySelector('ul');
  // let li = document.createElement('li');
  jokerContainer.innerHTML = joke.joke;
  // ul.appendChild(li);
}
// const fetchJoke = () => {
//   // Adicionar lógica aqui!
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//   .then(response => response.json())
//   .then(data => appendAlberto(data.joke) || console.log(data.joke))
// };

// window.onload = () => fetchJoke();


const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(console.log('Entrou na promise fetch'))
    .then(response => response.json())
    .then(data => appendAlberto(data) || console.log(data.joke))
    .catch(console.log('error'))
}

window.onload = () => fetchJoke();
