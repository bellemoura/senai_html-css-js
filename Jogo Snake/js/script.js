const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext('2d'); // Renderização bidimensional

const unitSize = 40; // Tamanho de cada unidade (quadrado)

canvas.width = 550;  // Largura do jogo

canvas.height = 400; // Altura do jogo

let velocidade = 200;
 


// Criar a Cobra e a Comida

// Defina as variáveis que representarão a cobra, a comida e a direção.


let snake = [{ x: 200, y: 200 }]; // Cobra começa no meio do canvas

let food = { x: 100, y: 100 };    // Posição inicial da comida


let dx = unitSize;                // Movimento horizontal

let dy = 0;                       // Movimento vertical

let score = 0;
 


// Desenhar o Jogo


// Crie as funções para desenhar a cobra e a comida.


function
drawSnake() {

  ctx.fillStyle = 'purple'; // Cor dos quadrados da cobrinha
  ctx.strokeStyle = 'blueviolet'; // Cor da borda dos quadrados da cobrinha
  ctx.lineWidth = 100; // Largura da borda

  snake.forEach(part => {

    ctx.fillRect(part.x, part.y, unitSize, unitSize);
    ctx.strokeRect(snake.x, snake.y, unitSize, unitSize); //Desenha a borda


  });


}


 

function
drawFood() {

  ctx.fillStyle = 'green';

  ctx.fillRect(food.x, food.y, unitSize, unitSize);

}


 

// Atualizar o Jogo


// Implemente a lógica de movimentação, colisão e crescimento.


function
moveSnake() {


  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  snake.unshift(head); // Adiciona uma nova cabeça


 


  // Verifica se comeu a comida


  if (head.x === food.x && head.y === food.y) {


    generateFood(); // Gera uma nova comida

    score += 10; //Aumenta o score em 10 pontos


  } else {

    snake.pop(); // Remove a cauda

  }


}


 


function
checkCollision() {


  // Colisão com paredes


  if (
    snake[0].x < 0 ||

    snake[0].x >= canvas.width ||

    snake[0].y < 0 ||

    snake[0].y >= canvas.height

  ) {

    return true;
  }


 


  // Colisão com o próprio corpo


  for (let i = 1; i < snake.length; i++) {


    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {


      return true;


    }


  }


  return false;


}


 

// Gerar Comida Aleatoriamente

// Adicione uma função para gerar comida em posições aleatórias.


function
generateFood() {


  food.x = Math.floor(Math.random() * (canvas.width / unitSize)) * unitSize;


  food.y = Math.floor(Math.random() * (canvas.height / unitSize)) * unitSize;


}


 

// Controle da Cobra

// Crie um evento para mudar a direção da cobra.


document.addEventListener('keydown', (event) => {


  if (event.key === 'ArrowUp' && dy === 0) {

    dx = 0;

    dy = -unitSize;


  } else if (event.key === 'ArrowDown' && dy === 0) {

    dx = 0;

    dy = unitSize;


  } else if (event.key === 'ArrowLeft' && dx === 0) {

    dx = -unitSize;

    dy = 0;


  } else if (event.key === 'ArrowRight' && dx === 0) {

    dx = unitSize;

    dy = 0;

  }


});


 

// Loop do Jogo

// Monte o loop principal para desenhar e atualizar o jogo.


function
gameLoop() {


  if (checkCollision()) {

    alert('Fim de Jogo! :)');

    document.location.reload();

  }


  setTimeout(() => {


    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    drawFood();

    moveSnake();

    drawSnake();

    gameLoop();

    ctx.fillStyle = 'whiteegg'; // Cor do texto
    ctx.font = '20px Arial'; // Fonte do texto
    ctx.fillText('Score: ' + score, 10, 30); // Exibe o score

}, velocidade);

} 


// Input velocidade e botão de iniciar

let submitBtn = document.getElementById("submitVelocidade");
let velocidadeInput = document.getElementById("txtVelocidade");

submitBtn.addEventListener("click", function(){

  velocidade = velocidadeInput.value;

});

function iniciar(){
  generateFood();

  gameLoop();
}