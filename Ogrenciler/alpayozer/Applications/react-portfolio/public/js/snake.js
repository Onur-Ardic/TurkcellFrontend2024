import { getInputDirection } from "./input.js";
const score = document.getElementById("score");
const level = document.getElementById("level");
level.innerText = 1;

let SNAKE_SPEED = 5; //hızı ayarlıyor
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

const update = () => {
  addSegments();
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
  score.innerText = snakeBody.length;
};

function snakeDraw(gameBoard, snakeColor) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add(snakeColor);
    gameBoard.appendChild(snakeElement);
  });
}

const draw = (gameBoard) => {
  if (snakeBody.length > 10 && snakeBody.length < 30) {
    SNAKE_SPEED = 10;
    level.innerText = 2;
    snakeDraw(gameBoard, "snake2");
  } else if (snakeBody.length > 30) {
    SNAKE_SPEED = 20;
    level.innerText = 3;
    snakeDraw(gameBoard, "snake3");
  } else {
    snakeDraw(gameBoard, "snake");
  }
};

const expandSnake = (amount) => {
  newSegments += amount;
};

const onSnake = (position, { ignoreHead = false } = {}) => {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
};

const getSnakeHead = () => {
  return snakeBody[0];
};

const snakeIntersection = () => {
  return onSnake(snakeBody[0], { ignoreHead: true });
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
};

export {
  draw,
  update,
  expandSnake,
  onSnake,
  getSnakeHead,
  snakeIntersection,
  SNAKE_SPEED,
  snakeBody,
};
