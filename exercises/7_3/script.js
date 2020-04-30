const cartaVirada = document.querySelector('#carta_virada');
const cartas = document.querySelector('#carta');
const mesa = document.querySelector('#mesa');

const naipes = ['cinco-de-ouros.png', 'nove-de-espadas.png', 'quatro-de-paus.png', 
                'seis-de-copas.png', 'sete-de-espadas.png', 'sete-de-paus.png', 
                'tres-de-ouros.png']

const transforms = [
    "rotate", "translate-up", "translate-down",
    "scale-up", "scale-down", "skew-up", "skew-down"
  ]

function getRandomTransform() {
  const transformIndex = Math.floor(Math.random() * transforms.length)
  console.log(transforms[transformIndex])
  return transforms[transformIndex];
}

function getRandomNaipe() {
    const naipesIndex = Math.floor(Math.random() * naipes.length)
    return naipes[naipesIndex];
}


cartaVirada.addEventListener('click', function(){
    let naipe = getRandomNaipe();
   var newCard = document.createElement('div');
   newCard.setAttribute('id', 'carta');
   newCard.style.backgroundImage = "url('cartas/" + naipe;
   mesa.appendChild(newCard); 

   newCard.addEventListener('mouseover', function(){
    var transform = getRandomTransform();
    newCard.className = ''
    newCard.classList.add(transform);
    newCard.style.animationFillMode = "forwards";

    newCard.addEventListener('click', function(){
        newCard.className = '';
        newCard.style.display = 'none';
    })

})

})

