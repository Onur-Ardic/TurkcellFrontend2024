const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");

let player = "X";
let gameOver = false;
let winner;

function startGame() {
  playerText.textContent = $(player)`s Turn!`;
  blocks.forEach((block) =>
    block.addEventListener("click", () => chooseArea(block))
  );
}
