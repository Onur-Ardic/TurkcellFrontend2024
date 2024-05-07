const player = document.getElementById("player");
const button = document.getElementById("button");
const box = document.querySelectorAll(".box");

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

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

startGame();

function startGame() {
  box.forEach((item) => item.addEventListener("click", itemClicked));
  button.addEventListener("click", restartGame);
  player.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function itemClicked(event) {
  const clickedItem = event.target;
  const id = clickedItem.getAttribute("id");

  if (options[id] !== "" || !running) {
    return;
  }

  updateItem(clickedItem, id);
  checkWinner();
}

function updateItem(item, index) {
  options[index] = currentPlayer;
  item.textContent = currentPlayer;
  item.style.color = currentPlayer == "X" ? "#ffc107" : "#1976d2";
  item.style.fontSize = "36px";
}
function changePlayer() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  // currentPlayer = currentPlayer == "X" ? "O" : "X";
  player.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const itemA = options[condition[0]];
    const itemB = options[condition[1]];
    const itemC = options[condition[2]];

    if (itemA == "" || itemB == "" || itemC == "") {
      continue;
    }
    if (itemA == itemB && itemB == itemC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    player.textContent = `${currentPlayer} wins!`;

    running = false;
  } else if (!options.includes("")) {
    player.textContent = `Draw!`;
    running = false;
  } else {
    changePlayer();
  }
}
function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  player.textContent = `${currentPlayer}'s turn`;
  box.forEach((item) => (item.textContent = ""));
  running = true;
}
