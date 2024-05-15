const gameBoard = document.getElementById('game-board');
const snake = document.getElementById('snake');
const food = document.getElementById('food');
let snakex = 300; // Başlangıç pozisyonu
let snakey = 300;
let foodx = 300;
let foody = 300;
let move = 20; // Hareket hızı (px)
const boardWidth = gameBoard.offsetWidth;
const boardHeight = gameBoard.offsetHeight;
const snakeSize = snake.offsetWidth;
var snakeHeight = 20;

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        snakey -= move; // Yukarı hareket
    } else if (event.key === 'ArrowDown') {
        snakey += move; // Aşağı hareket
    } else if (event.key === 'ArrowLeft') {
        snakex -= move; // Sola hareket
    } else if (event.key === 'ArrowRight') {
        snakex += move; // Sağa hareket
    }
    // Yeni pozisyonu güncelle
    updatePosition();
});

function updatePosition() {
    // Yılanın tahtanın dışına çıkmasını engelleme
    if (snakex < 0) {
        snakex = boardWidth - snakeSize;
    } else if (snakex >= boardWidth) {
        snakex = 0;
    }
    if (snakey < 0) {
        snakey = boardHeight - snakeSize;
    } else if (snakey >= boardHeight) {
        snakey = 0;
    }
    if(eatFood()) {
        createFood();
        updateBody();
    }

    // Yılanın yeni pozisyonunu güncelle
    snake.style.left = snakex + 'px';
    snake.style.top = snakey + 'px';
}

function createFood() {
    foodx = Math.floor(Math.random()*30)*20;
    foody = Math.floor(Math.random()*30)*20;
    food.style.left = foodx + 'px';
    food.style.top = foody + 'px';
}

function eatFood() {
    return snakex === foodx && snakey === foody;
}

function updateBody() {
    snakeHeight = parseFloat(snakeHeight) + parseFloat(100);
    snake.style.height = snakeHeight + 'px';
    console.log(snakeHeight);
}