var transforms = [
  "rotate", "translate-up", "translate-down",
  "scale-up", "scale-down", "skew-up", "skew-down"
] // Array de classes de transformações

const ANIMATION_TIME = 1000; // Tempo de Animacao
const TRANSFORM_INTERVAL = 2500; // Tempo de intervalo de transformação
const BASE_RACING_TIME = 30; // Variavel de calculo de tempo de corrida

 // Função que retorna uma classe aleatoria de transformacao
function getRandomTransform() {
  // Calculo randomico para retornar um index aleatorio do nosso array de classes.
  // Pegamos um valor randomico decimal de 0 a 1 e multiplicamos pelo tamanho do array e arredondamos para baixo.
  //  ex: 0.8420929154329106 * 7 = 5.894650408030374 -> 5
  const transformIndex = Math.floor(Math.random() * transforms.length)
  return transforms[transformIndex]; // Em seguida retornamos o item que está nessa posição aleatoria do array
}


// Função que reseta nossas animações, ela recebe o elemento do button e o array de elementos cars
function reset(cars, button) {
  for (let car of cars) { // Fazemos um loop entre cada elemento car dentro do array
    car.style.animation = ""; // Setamos sua animação para vazia de forma a desativa-la
    clearInterval(car.timer) // Zeramos o Interval declarado a baixo que faz o elemento se mover
  }
  button.disabled = false; // Habilita o botão de iniciar corrida novamente
}

window.onload = function () { 
  var button = document.querySelector("button"); // Pegamos o elemento button que está no HTML
  var cars = document.querySelectorAll(".car") // Pegamos todos os elementos com a class car que estão no HTML

  for (let i = 0; i < cars.length; i++) { // Fazemos um loop entre cada car para setar um number como indentificador em cada
    cars[i].number = i + 1;
  }

  button.addEventListener("click", function (event) { // Event listener adicionado ao button que executa oque está abaixo quando ele é clicado.
    button.disabled = true;

    for (let car of cars) { // Fazemos um loop entre cada carro que está no array de elementos

      car.transformTimer = setInterval(function () { // Criamos um atributo `transformTimer` que vamos armazenar a função setInterval
        // Tudo que está aqui dentro sera executado a cada 2,5s que a variavel TRANSFORM_INTERVAL define no segundo parametro dessa função setInterval

        var transform = getRandomTransform() // Pegamos nosso elemento randomico do metodo criado e salvamos na variavel `transform`
        car.classList.add(transform); // Adicionamos essa nova classe no elemento car que está sendo interado neste momento no loop

        setTimeout(function () { // Esse metodo é executado apenas uma vez após o tempo definido no segundo parametro ANIMATION_TIME
          car.classList.remove(transform) // Assim que termina o tempo de animação definido removemos a classe.
        }, ANIMATION_TIME)

        // car.addEventListener("transitionend", function (event) {  
        //   car.classList.remove(transform)  // Pós aula com dica da Débora de como utilizar o transitionend 
        // })                                 // Cria um EventListener que aguarda uma transição terminar e assim que ela termina
                                              // Remove a classe de transformação do elemento       

      }, TRANSFORM_INTERVAL)
    }



    for (let car of cars) { // Itereção para aplicar animação em todos os carros
      var timeAdditionTime = Math.floor(Math.random() * 5) // Criamos essa variavel para criar um valor de timer aleatorio para cada carro
      car.style.animation = `racing ${BASE_RACING_TIME + timeAdditionTime}s ease-out` //Setamos a animation de cara carro com a soma do nosso valor aleatorio e o valor base da corrida de 30s
      car.style.animationFillMode = "forwards";
      car.timer = setInterval(function () { // Usamos o setInterval para conferir a cada 60 millisegundos se o carro atual ja chegou ao fim da tela
        if (parseInt(window.getComputedStyle(car).marginLeft) >= window.innerWidth) { // Usamos o getComputedStyle para conferir os valores de do marginleft atual na tela
          alert(`Carro ${car.number} ganhou!`); // Disparamos o alert do carro que chegou ao final primero
          reset(cars, button); // Chamamos o metodo de reset para limpar as animations.
        }
      }, 60)
    }
  });
}
