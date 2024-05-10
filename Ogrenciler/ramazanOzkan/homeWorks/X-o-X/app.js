const board = document.getElementById("board");
const cells = [];
const resetButton = document.getElementById("reset");
let currentPlayer = 'X';
let gameOver = false;
let xCounter=0;
let oCounter=0;
const xLabel = document.getElementById("xLabel");
const oLabel = document.getElementById("oLabel");
const resetSkore = document.getElementById("resetSkore");

for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cells.push(cell);
  board.appendChild(cell);
  cell.addEventListener('click', () => {
    if (!gameOver && cell.textContent === '') {
      cell.textContent = currentPlayer;
      if (currentPlayer === 'X') {
        cell.style.color = '#545454';
      } else {
        cell.style.color = '#F2EBD3';
      }
      checkWin();
      currentPlayer = currentPlayer === 'X'? 'O' : 'X';
      console.log(cells[i]);
      console.log(cells);

    }
  });
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winningCombinations.forEach(combination => {
    const [index1, index2, index3] = combination;
    const cell1 = cells[index1];
    const cell2 = cells[index2];
    const cell3 = cells[index3];
  
    if (cell1.textContent === cell2.textContent && cell1.textContent === cell3.textContent && cell1.textContent!== '') {
      cell1.style.color = 'red';
      cell2.style.color = 'red';
      cell3.style.color = 'red';
      gameOver = true;
      resultLabel.textContent=(`${cell1.textContent} Kazandı!`);
      if(cell1.textContent == 'X'){
        xCounter+=1;
        xLabel.textContent=xCounter;
        console.log(xCounter);
      }
      else{
        oCounter+=1;
        oLabel.textContent=oCounter;
        console.log(oCounter);
      }
    }
  });
  

  let isDraw = true;
  cells.forEach(cell => {
    if (cell.textContent === '') {
      isDraw = false;
    }
  });
  if (isDraw  && gameOver == false) {
    gameOver = true;
    resultLabel.textContent=("Beraberlik!!");
  }
}

resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.color='black';
  });
  gameOver = false;
  currentPlayer = 'X';
  resultLabel.textContent='';
});

resetSkore.addEventListener('click',()=>{
  xCounter=0;
  oCounter=0;
  xLabel.textContent="-";
  oLabel.textContent="-";
});
