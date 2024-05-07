const buttons = document.getElementsByClassName("btn");
const resetButton = document.querySelector("#resetButton");
const xScoreText = document.querySelector("#xScore");
const oScoreText = document.querySelector("#oScore");
const tieScoreText = document.querySelector("#tieScore");
const result = document.querySelector("#result");
const table = document.querySelector("#table");
const players = ["X", "O"];
let xScore = 0;
let oScore = 0;
let tieScore = 0;
let currentPlayer = players[0];
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function winning(currentPlayer) {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      buttons[a].textContent === currentPlayer &&
      buttons[b].textContent === currentPlayer &&
      buttons[c].textContent === currentPlayer
    ) {
      buttons[a].style.backgroundColor = "green";
      buttons[b].style.backgroundColor = "green";
      buttons[c].style.backgroundColor = "green";
      return true;
    }
  }
  return false;
}
function tie() {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === "") {
      return false;
    }
  }
  return true;
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].textContent !== "") {
      return;
    }
    buttons[i].textContent = currentPlayer;
    if (winning(currentPlayer)) {
      table.style.pointerEvents = "none";
      result.textContent = `${currentPlayer} Won!`;
      if (currentPlayer === "X") {
        xScore++;
      } else {
        oScore++;
      }
      xScoreText.textContent = `X Score: ${xScore}`;
      oScoreText.textContent = `O Score: ${oScore}`;
      return;
    }
    if (tie()) {
      tieScore++;
      tieScoreText.textContent = `Tie Score: ${tieScore}`;
      result.textContent = "Tie";
      return;
    }
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    currentPlayer === players[0]
      ? (result.textContent = "X's Turn")
      : (result.textContent = "O's Turn");
  });
}
function resetGame() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "";
    buttons[i].style.backgroundColor = "#000000";
  }
  currentPlayer = players[0];
  result.textContent = "X's Turn";
  table.style.pointerEvents = "auto";
}
resetButton.addEventListener("click", resetGame);
