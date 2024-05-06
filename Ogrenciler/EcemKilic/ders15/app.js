const fields = document.querySelectorAll(".fields .col");
const fieldss = document.querySelector(".fields");
const playAgain = document.querySelector(".btn");
const body = document.querySelector("body");
const result = document.querySelector(".result");
const turn = document.querySelector(".turn");

let range = "X";
turn.textContent = `Sıra ${range} de`
const winCombiantions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


for (let field = 0; field < fields.length; field++) {
    fields[field].addEventListener ("click", () => {           
        if (range == "X") {
            fields[field].textContent = "X";
            fields[field].style.pointerEvents = "none";
            fields[field].style.backgroundColor = "navy";
            fields[field].style.color = "white";
            fields[field].classList.add("selected");
            control(range);
            range = "O";
            turn.textContent = `Sıra ${range} da`
        } else {
            fields[field].textContent = "O";
            fields[field].style.pointerEvents = "none";
            fields[field].style.backgroundColor = "crimson";
            fields[field].style.color = "white";
            fields[field].classList.add("selected");
            control(range);
            range = "X";
            turn.textContent = `Sıra ${range} de`
        }        
    });
}

function control(range){
    for (let box = 0; box < winCombiantions.length; box++){
        let [x,y,z] = winCombiantions[box];
        if(fields[x].textContent == range && fields[y].textContent == range && fields[z].textContent == range) {
            let div = document.createElement("div")
            div.classList.add("bg-success","p-3","text-white");
            div.textContent = `${range} kazandı.`
            fieldss.style.pointerEvents = "none"
            result.appendChild(div);
            return false;
        }
    }     
}

playAgain.addEventListener("click",() => {
    window.location.reload();
})