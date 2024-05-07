let box = document.querySelectorAll(".box");
console.log(box);
let player = "X";
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const boxCheck = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return console.log("win");
    }
  }
  return null;
};

const boxClick = (e) => {
  let index = e.target.id;
  if (gameBoard[index] !== "X" && gameBoard[index] !== "O") {
    gameBoard[index] = player;
    e.target.innerHTML = player;
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }
  boxCheck();
};

box.forEach((item) => {
  item.addEventListener("click", (e) => boxClick(e));
});
