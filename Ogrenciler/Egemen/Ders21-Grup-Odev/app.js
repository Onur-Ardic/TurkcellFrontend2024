const xSkor = document.getElementById("xSkor");
const oSkor = document.getElementById("oSkor");

let currentPlayer = "X";
let firstCalc = 1;
let xPoint = 0;
let oPoint = 0;

function play(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    if (firstCalc > 4) {
      // console.log("tetiklendi");
      if (checkWin()) {
        // alert(currentPlayer + " Kazandı!");
        xSkor.textContent = xPoint;
        oSkor.textContent = oPoint;
        if (xPoint == 5) {
          alert("X Kazandı!");
        } else if (oPoint == 5) {
          alert("O Kazandı!");
        }
        resetGame();
        return;
      }
      if (checkDraw()) {
        alert("Berabere!");
        resetGame();
        return;
      }
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    firstCalc++;
  }
}

function checkWin() {
  let cells = document.querySelectorAll("td");
  // console.log(cells);
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    // console.log(cells[line[0]], cells[line[1]], cells[line[2]]);
    // console.log(line);
    if (
      cells[line[0]].textContent &&
      cells[line[0]].textContent === cells[line[1]].textContent &&
      cells[line[0]].textContent === cells[line[2]].textContent
    ) {
      currentPlayer === "X" ? xPoint++ : oPoint++;
      console.log(xPoint, oPoint);
      return true;
    }
  }
  return false;
}

function checkDraw() {
  let cells = document.querySelectorAll("td");
  for (let cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }
  return true;
}

function resetGame() {
  let cells = document.querySelectorAll("td");
  for (let cell of cells) {
    cell.textContent = "";
  }
  currentPlayer = "X";
}
