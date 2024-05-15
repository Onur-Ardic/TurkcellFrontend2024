let blockSize = 25;
let total_row = 17; //total row number
let total_col = 17; //total column number
let board;
let context;
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

var gameStatus = document.getElementById("gameStatus");
var scoreBox = document.getElementById("scoreBox");

// Set the total number of rows and columns
let speedX = 0; //speed of snake in x coordinate.
let speedY = 0; //speed of snake in Y coordinate.

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;
var score = 0;

window.onload = function () {
	// Set board height and width
	board = document.getElementById("board");
	board.height = total_row * blockSize;
	board.width = total_col * blockSize;
	context = board.getContext("2d");

	placeFood();
	document.addEventListener("keyup", function(event) {
        changeDirection(event.key);
    });
	// Set snake speed
	setInterval(update, 2000 / 10);
}

function update() {
	if (gameOver) {
		return;
	}

	// Background of a Game
	context.fillStyle = "green";
	context.fillRect(0, 0, board.width, board.height);

	// Set food color and position
	context.fillStyle = "yellow";
	context.fillRect(foodX, foodY, blockSize, blockSize);

	if (snakeX == foodX && snakeY == foodY) {
		snakeBody.push([foodX, foodY]);
		placeFood();
        updateScore();
	}

	// body of snake will grow
	for (let i = snakeBody.length - 1; i > 0; i--) {
		// it will store previous part of snake to the current part
		snakeBody[i] = snakeBody[i - 1];
	}
	if (snakeBody.length) {
		snakeBody[0] = [snakeX, snakeY];
	}

	context.fillStyle = "white";
	snakeX += speedX * blockSize; //updating Snake position in X coordinate.
	snakeY += speedY * blockSize; //updating Snake position in Y coordinate.
	context.fillRect(snakeX, snakeY, blockSize, blockSize);
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}

	if (snakeX < 0 
		|| snakeX > total_col * blockSize 
		|| snakeY < 0 
		|| snakeY > total_row * blockSize) { 
		
		// Out of bound condition
		gameOver = true;
        gameStatus.textContent = 'Game Over'
		
	}

	for (let i = 0; i < snakeBody.length; i++) {
		if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
			
			// Snake eats own body
			gameOver = true;
			gameStatus.textContent = 'Game Over'
            

		}
	}
}

// Movement of the Snake - We are using addEventListener
function changeDirection(key) {
    switch(key) {
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

// Randomly place food
function placeFood() {

	// in x coordinates.
	foodX = Math.floor(Math.random() * total_col) * blockSize; 
	
	//in y coordinates.
	foodY = Math.floor(Math.random() * total_row) * blockSize; 
}

function updateScore () {
    score += 1;
    scoreBox.innerHTML = `Score ${score}`;
}