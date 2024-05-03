let computerMove;
let userMove;
let computerScore = 0;
let userScore = 0;
let tieScore = 0;

const computerSection = document.querySelector(".computer-section");
const userSection = document.querySelector(".user-section");
let initialUserImg = document.createElement("img");
initialUserImg.src = "./assets/rock-right.png";
let initialCompImg = document.createElement("img");
initialCompImg.src = "./assets/rock.png";
computerSection.appendChild(initialCompImg);
userSection.appendChild(initialUserImg);
initialUserImg.classList.add("shakeAnimation");
initialCompImg.classList.add("shakeAnimation");
const userScoreText = document.querySelector(".user-score-dom");
const computerScoreText = document.querySelector(".computer-score-dom");
const tieScoreText = document.querySelector(".tie-score-dom");
const playUser = (move) => {
  initialUserImg.src = `./assets/${move}-right.png`;
  userMove = move;
};
const playComputer = () => {
  const random = Math.floor(Math.random() * 3);
  initialUserImg.classList.remove("shakeAnimation");
  initialCompImg.classList.remove("shakeAnimation");
  if (random === 0) {
    initialCompImg.src = "./assets/rock.png";
    computerMove = "rock";
  } else if (random === 1) {
    initialCompImg.src = "./assets/paper.png";
    computerMove = "paper";
  } else {
    initialCompImg.src = "./assets/scissors.png";
    computerMove = "scissors";
  }
};
const calculateScore = () => {
  if (userMove === computerMove) {
    tieScore++;
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  ) {
    userScore++;
  } else {
    computerScore++;
  }
  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;
  tieScoreText.textContent = tieScore;
};
const moveAnimation = () => {
  initialUserImg.src = "./assets/rock-right.png";
  initialCompImg.src = "./assets/rock.png";
  initialUserImg.classList.remove("shakeAnimation");
  initialCompImg.classList.remove("shakeAnimation");
  initialUserImg.classList.add("moveAnimation");
  initialCompImg.classList.add("moveAnimation");
  setTimeout(() => {
    initialUserImg.classList.remove("moveAnimation");
    initialCompImg.classList.remove("moveAnimation");
  }, 1500);
};

const game = (move) => {
  moveAnimation();
  setTimeout(function () {
    playComputer();
    playUser(move);
    calculateScore();
  }, 1500);
};
const rockBtn = document
  .querySelector(".rock-btn")
  .addEventListener("click", () => {
    game("rock");
  });
const paperBtn = document
  .querySelector(".paper-btn")
  .addEventListener("click", () => {
    game("paper");
  });
const scissorsBtn = document
  .querySelector(".scissors-btn")
  .addEventListener("click", () => {
    game("scissors");
  });
