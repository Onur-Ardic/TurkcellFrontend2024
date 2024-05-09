const fieldCols = document.querySelectorAll(".fields .col");
const fields = document.querySelector(".fields");
const playAgain = document.querySelector(".btn");
const body = document.querySelector("body");
const result = document.querySelector(".result");
const turn = document.querySelector(".turn");

let range = "X";
turn.textContent = `Turn to play ${range} `;
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

for (let field = 0; field < fieldCols.length; field++) {
  fieldCols[field].addEventListener("click", () => {
    if (range == "X") {
      fieldCols[field].textContent = "X";
      fieldCols[field].style.pointerEvents = "none";
      fieldCols[field].style.backgroundColor = "#54627B";
      fieldCols[field].style.color = "white";
      fieldCols[field].classList.add("selected");
      control(range);
      range = "O";
      turn.textContent = `Turn to play ${range} `;
    } else {
      fieldCols[field].textContent = "O";
      fieldCols[field].style.pointerEvents = "none";
      fieldCols[field].style.backgroundColor = "crimson";
      fieldCols[field].style.color = "white";
      fieldCols[field].classList.add("selected");
      control(range);
      range = "X";
      turn.textContent = `Turn to play ${range} `;
    }
    
  }); 
}

function control(range) {
  for (let box = 0; box < winCombiantions.length; box++) {
    let [x, y, z] = winCombiantions[box];
    if (
      fieldCols[x].textContent == range &&
      fieldCols[y].textContent == range &&
      fieldCols[z].textContent == range
    ) {
      let div = document.createElement("div");
      div.classList.add("bg-success", "p-3", "text-white");
      div.textContent = `${range} WON !`;
      fields.style.pointerEvents = "none";
      result.appendChild(div);
      return;
    }
  }
  for (let i = 0; i < fieldCols.length; i++) {
    if (!fieldCols[i].classList.contains("selected")) {
      return;
    }
  }
  let div = document.createElement("div");
  div.classList.add("bg-success", "p-3", "text-white");
  div.textContent = `A DRAW !`;
  result.appendChild(div);
}

playAgain.addEventListener("click", () => {
  window.location.reload();
});
