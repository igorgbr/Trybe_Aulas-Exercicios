const API_URL = 'https://icanhazdadjoke.com/';

const appendAlberto = (joke) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = joke;
    ul.appendChild(li);
}
const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => appendAlberto(data.joke) || console.log(data.joke))
};

window.onload = () => fetchJoke();
        
