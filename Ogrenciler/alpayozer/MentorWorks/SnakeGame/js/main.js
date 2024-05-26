import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  snakeBody,
} from "./snake.js";
import { update as updateFood, drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const highScore = document.getElementById("highScore");
const localScore = localStorage.getItem("score");
highScore.innerText = localScore;

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      highScoreCalculate();
      window.location.reload(false);
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render");
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

export function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function highScoreCalculate() {
  if (snakeBody.length > localScore) {
    localStorage.setItem("score", snakeBody.length);
  }
}
