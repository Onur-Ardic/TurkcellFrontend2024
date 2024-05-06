const winCombiantions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const players = ["X", "O"];
let currentPlayer = players[0];
const boxs = document.querySelectorAll(".box");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");
reset.addEventListener("click", playAgain);

function checkWin(currentPlayer) {
  for (let i = 0; i < winCombiantions.length; i++) {
    const [a, b, c] = winCombiantions[i];
    if (
      boxs[a].textContent === currentPlayer &&
      boxs[b].textContent === currentPlayer &&
      boxs[c].textContent === currentPlayer
    ) {
      result.textContent = `${currentPlayer} WIN!`;
      return true;
    }
  }
  return false;
}
function playAgain() {
  currentPlayer = players[0];
  result.textContent = "X's Turn";
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].textContent = "";
    boxs[i].disabled = false;
  }
}
for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", () => {
    if (boxs[i].textContent !== "") {
      return;
    }
    boxs[i].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      for (let i = 0; i < boxs.length; i++) {
        boxs[i].disabled = true;
      }
      return;
    }
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    currentPlayer === "X"
      ? (result.textContent = "X's Turn")
      : (result.textContent = "O's Turn");
  });
}
