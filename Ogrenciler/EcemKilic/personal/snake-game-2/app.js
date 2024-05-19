let blockSize = 25;
let total_row = 17;
let total_col = 17;
let gameBoard;
let snakeX = 5;
let snakeY = 5;

var gameStatus = document.getElementById("gameStatus");
var scoreBox = document.getElementById("scoreBox");
var hiscoreBox = document.getElementById("hiscoreBox");

let speedX = 0;
let speedY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;
var score = 0;
var hiscore = localStorage.getItem("hiscore") || 0;
hiscoreBox.innerHTML = `HiScore: ${hiscore}`;

window.onload = function () {
    gameBoard = document.getElementById("gameBoard");
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000);
	restartGame();
}

addEventListener("click", restartGame);
function restartGame() {
    snakeX = 5;
    snakeY = 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    gameOver = false;
    score = 0;
    scoreBox.innerHTML = `Score: ${score}`;
    gameStatus.textContent = 'Game Started';
    placeFood();
    setInterval(update, 1000);
}

function update() {
    if (gameOver) {
        if (score > hiscore) {
            hiscore = score;
            localStorage.setItem("hiscore", hiscore);
            hiscoreBox.innerHTML = `HiScore: ${hiscore}`;
        }
        return;
    }

    // Clear the game board
    gameBoard.innerHTML = '';

    // Update snake position
    snakeX += speedX;
    snakeY += speedY;

    // Wrap around logic
    if (snakeX < 0) snakeX = total_col - 1;
    if (snakeX >= total_col) snakeX = 0;
    if (snakeY < 0) snakeY = total_row - 1;
    if (snakeY >= total_row) snakeY = 0;

    // Check for collision with food
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        updateScore();
    }

    // Move snake body
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    // Draw food
    let foodDiv = document.createElement("div");
    foodDiv.style.gridRowStart = foodY + 1;
    foodDiv.style.gridColumnStart = foodX + 1;
    foodDiv.classList.add("cell", "food");
    gameBoard.appendChild(foodDiv);

    // Draw snake
    let snakeHeadDiv = document.createElement("div");
    snakeHeadDiv.style.gridRowStart = snakeY + 1;
    snakeHeadDiv.style.gridColumnStart = snakeX + 1;
    snakeHeadDiv.classList.add("cell", "snake");
    gameBoard.appendChild(snakeHeadDiv);

    for (let i = 0; i < snakeBody.length; i++) {
        let snakeBodyDiv = document.createElement("div");
        snakeBodyDiv.style.gridRowStart = snakeBody[i][1] + 1;
        snakeBodyDiv.style.gridColumnStart = snakeBody[i][0] + 1;
        snakeBodyDiv.classList.add("cell", "snake");
        gameBoard.appendChild(snakeBodyDiv);
    }

    // Check for collision with snake body
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            gameStatus.textContent = 'Game Over';
        }
    }
}

function changeDirection(event) {
    switch(event.key) {
        case "ArrowUp":
            if (speedY != 1) {
                speedX = 0;
                speedY = -1;
            }
            break;
        case "ArrowDown":
            if (speedY != -1) {
                speedX = 0;
                speedY = 1;
            }
            break;
        case "ArrowLeft":
            if (speedX != 1) {
                speedX = -1;
                speedY = 0;
            }
            break;
        case "ArrowRight":
            if (speedX != -1) {
                speedX = 1;
                speedY = 0;
            }
            break;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * total_col);
    foodY = Math.floor(Math.random() * total_row);
}

function updateScore() {
    score += 1;
    scoreBox.innerHTML = `Score: ${score}`;
}