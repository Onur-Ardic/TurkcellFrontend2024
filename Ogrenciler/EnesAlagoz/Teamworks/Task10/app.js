const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player1 = "X";
let player2 = "O";
let currentPlayer = player1; // Şu anki oyuncuyu takip etmek için currentPlayer değişkeni ekledim
let gameOver = false;
let winner;

function startGame() {
  playerText.textContent = `${currentPlayer === player1 ? "Ronaldo" : "Messi"}'nin Sırası !`;
  blocks.forEach((block) => {
    block.style.backgroundColor = "transparent"; // Başlangıçta hücrelerin arka plan rengini varsayılan rengine döndürme
    block.addEventListener("click", () => chooseArea(block));
  });
}
function chooseArea(block) {
  if (block.textContent === "") {
    block.textContent = currentPlayer;
    block.style.color = currentPlayer === player1 ? "black" : "red"; // ternary operatörü ile currentPlayer'a göre renk değiştirme

    turnPlayer();
  } else {
    errorText.textContent = "Bu Kutucuk Boş Değil!";
    block.style.border = "2px solid red";
    setTimeout(() => {
      errorText.textContent = "";
      block.style.border = "1px solid black";
    }, 2500);
  }

  checkWin();
  checkTie();

  if (gameOver) {
    if (winner === player1) {
      winner = "Ronaldo";
    } else if (winner === player2) {
      winner = "Messi";
    } else {
      playerText.textContent = "Oyun Berabere Bitti!";
    }

    if (winner) {
      playerText.textContent = `Oyun Bitti, ${winner} Kazandı!`;
    }

    blocks.forEach((block) => (block.style.pointerEvents = "none"));
  }
}

function turnPlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1; // currentPlayer'a göre güncellendi
  playerText.textContent = `${currentPlayer === player1 ? "Ronaldo" : "Messi"}'nin Sırası`; // currentPlayer olarak güncellendi
}

function checkWin() {
  checkRows();
  checkColumns();
  checkDiagonals();
}

function checkTie() {
  const values = [];
  blocks.forEach((block) => values.push(block.textContent));
  if (!values.includes("")) {
    playerText.textContent = "Tie !";
    blocks.forEach((block) => (block.style.pointerEvents = "none"));
    gameOver = true; // Oyunun berabere bittiğini belirtmek için gameOver değişkeni güncellendi
  }
}

function checkRows() {
  let row1 =
    blocks[0].textContent == blocks[1].textContent &&
    blocks[0].textContent == blocks[2].textContent &&
    blocks[0].textContent !== "";
  let row2 =
    blocks[3].textContent == blocks[4].textContent &&
    blocks[3].textContent == blocks[5].textContent &&
    blocks[3].textContent !== "";
  let row3 =
    blocks[6].textContent == blocks[7].textContent &&
    blocks[6].textContent == blocks[8].textContent &&
    blocks[6].textContent !== "";

  if (row1 || row2 || row3) {
    gameOver = true;
    if (row1) {
      blocks[0].style.backgroundColor = "lightgreen";
      blocks[1].style.backgroundColor = "lightgreen";
      blocks[2].style.backgroundColor = "lightgreen";
    } else if (row2) {
      blocks[3].style.backgroundColor = "lightgreen";
      blocks[4].style.backgroundColor = "lightgreen";
      blocks[5].style.backgroundColor = "lightgreen";
    } else if (row3) {
      blocks[6].style.backgroundColor = "lightgreen";
      blocks[7].style.backgroundColor = "lightgreen";
      blocks[8].style.backgroundColor = "lightgreen";
    }
  }
  if (row1) return (winner = blocks[0].textContent);
  if (row2) return (winner = blocks[3].textContent);
  if (row3) return (winner = blocks[6].textContent);
}

function checkColumns() {
  let col1 =
    blocks[0].textContent == blocks[3].textContent &&
    blocks[0].textContent == blocks[6].textContent &&
    blocks[0].textContent !== "";
  let col2 =
    blocks[1].textContent == blocks[4].textContent &&
    blocks[1].textContent == blocks[7].textContent &&
    blocks[1].textContent !== "";
  let col3 =
    blocks[2].textContent == blocks[5].textContent &&
    blocks[2].textContent == blocks[8].textContent &&
    blocks[2].textContent !== "";

  if (col1 || col2 || col3) {
    gameOver = true;
    if (col1) {
      blocks[0].style.backgroundColor = "lightgreen";
      blocks[3].style.backgroundColor = "lightgreen";
      blocks[6].style.backgroundColor = "lightgreen";
    } else if (col2) {
      blocks[1].style.backgroundColor = "lightgreen";
      blocks[4].style.backgroundColor = "lightgreen";
      blocks[7].style.backgroundColor = "lightgreen";
    } else if (col3) {
      blocks[2].style.backgroundColor = "lightgreen";
      blocks[5].style.backgroundColor = "lightgreen";
      blocks[8].style.backgroundColor = "lightgreen";
    }
  }
  if (col1) return (winner = blocks[0].textContent);
  if (col2) return (winner = blocks[1].textContent);
  if (col3) return (winner = blocks[2].textContent);
}

function checkDiagonals() {
  let diag1 =
    blocks[0].textContent == blocks[4].textContent &&
    blocks[0].textContent == blocks[8].textContent &&
    blocks[0].textContent !== "";
  let diag2 =
    blocks[2].textContent == blocks[4].textContent &&
    blocks[2].textContent == blocks[6].textContent &&
    blocks[2].textContent !== "";

  if (diag1 || diag2) {
    gameOver = true;
    if (diag1) {
      blocks[0].style.backgroundColor = "lightgreen";
      blocks[4].style.backgroundColor = "lightgreen";
      blocks[8].style.backgroundColor = "lightgreen";
    } else if (diag2) {
      blocks[2].style.backgroundColor = "lightgreen";
      blocks[4].style.backgroundColor = "lightgreen";
      blocks[6].style.backgroundColor = "lightgreen";
    }
  }
  if (diag1) return (winner = blocks[0].textContent);
  if (diag2) return (winner = blocks[2].textContent);
}

function restartGame() {
  blocks.forEach((block) => {
    block.textContent = "";
    block.style.color = "initial";
    block.style.pointerEvents = "auto";
    block.style.backgroundColor = "transparent";
  });
  currentPlayer = player1; // currentPlayer'ı player1'e geri döndürdüm
  gameOver = false;
  winner = undefined;
  playerText.textContent = `${currentPlayer === player1 ? "Ronaldo" : "Messi"}'nin Sırası`; // currentPlayer olarak güncellendi
}

startGame();
