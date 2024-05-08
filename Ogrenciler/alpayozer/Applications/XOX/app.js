const box = document.querySelectorAll(".box");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
let player = "X";
result.innerText = `${player} Player Turn`;
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
let win;
let moves = 0;
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

reset.addEventListener("click", () => {
  location.reload();
});

const boxCheck = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      result.innerText = `${player} Player Win !!`;
      win = winningConditions[i];
      return true;
    }
  }
  return null;
};
const isTie = () => {
  return moves === 9 && !boxCheck();
};

const boxClick = (e) => {
  let index = e.target.id;
  if (gameBoard[index] !== "X" && gameBoard[index] !== "O") {
    gameBoard[index] = player;
    e.target.innerText = player;
    result.innerText = `${player} Player Turn`;
    moves++;
    if (boxCheck()) {
      box.forEach((item) => {
        item.setAttribute("disabled", true);
        for (let i = 0; i < win.length; i++) {
          box[win[i]].classList.add(
            "bg-win",
            "animate__animated",
            "animate__shakeX"
          );
        }
      });
      return;
    }
    if (isTie()) {
      result.innerText = `It's a Tie!`;
      for (let i = 0; i < 9; i++) {
        box[i].classList.add("tie");
        console.log(box[i]);
      }
      return;
    }
    if (player === "X") {
      player = "O";
      result.innerText = `${player} Player Turn`;
    } else {
      player = "X";
      result.innerText = `${player} Player Turn`;
    }
  }
};

box.forEach((item) => {
  item.addEventListener("click", (e) => boxClick(e));
});
