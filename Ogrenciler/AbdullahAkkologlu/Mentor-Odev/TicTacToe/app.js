const players = ["X", "O"];
const buttons = document.getElementsByClassName("btn");
let currentPlayer = players[0];
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetGame);

const combiantions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(currentPlayer) {
  for (let i = 0; i < combiantions.length; i++) {
    const [a, b, c] = combiantions[i];
    if (
      buttons[a].textContent === currentPlayer &&
      buttons[b].textContent === currentPlayer &&
      buttons[c].textContent === currentPlayer
    ) {
      result.textContent = `${currentPlayer} kazandı!`;
      buttons[a].style.color = "red";
      buttons[b].style.color = "red";
      buttons[c].style.color = "red";
      return true;
    }
  }
  return false;
}
function resetGame() {
  currentPlayer = players[0];
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "";
    buttons[i].style.color = "black";
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].textContent !== "") {
      return;
    }
    buttons[i].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      return;
    }
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  });
}
