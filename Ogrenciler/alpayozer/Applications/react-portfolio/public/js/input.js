let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

rightArrow.addEventListener("click", () => {
  if (lastInputDirection.x !== 0) return;
  inputDirection = { x: 1, y: 0 };
});

leftArrow.addEventListener("click", () => {
  if (lastInputDirection.x !== 0) return;
  inputDirection = { x: -1, y: 0 };
});

upArrow.addEventListener("click", () => {
  if (lastInputDirection.y !== 0) return;
  inputDirection = { x: 0, y: -1 };
});

downArrow.addEventListener("click", () => {
  if (lastInputDirection.y !== 0) return;
  inputDirection = { x: 0, y: 1 };
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
