const buttons = document.getElementsByClassName("btn");

const players = ["X", "O"];
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
      return true;
    }
  }
  return false;
}

/* function tie(currentPlayer) {
  if (!winning(currentPlayer)) {
  }
} */

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].textContent !== "") {
      return;
    }
    buttons[i].textContent = currentPlayer;
    if (winning(currentPlayer)) {
      alert(`${currentPlayer} Kazandi`);
      return;
    }
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  });
}
