const fields = document.querySelectorAll(".fields .col");
console.log(fields);

let x = true;
let o = false;

for (let field = 0; field < fields.length; field++) {
    fields[0].addEventListener ("click", () => {
        
        for (let box = 0; box < winCombiantions.length; box++){
            const[x,y,z] = winCombiantions[box];
            if(fields[x].textContent == "X") {
                
            }
        }
        if (x) {
            fields[0].textContent = "X";
            x = false;
            fields[0].style.pointerEvents = "none";
            fields[0].style.backgroundColor = "navy";
            fields[0].style.color = "white";
        } else {
            fields[0].textContent = "O";
            fields[0].style.pointerEvents = "none";
            x = true;
            fields[0].style.backgroundColor = "crimson";
            fields[0].style.color = "white";
        }
    });
}

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


