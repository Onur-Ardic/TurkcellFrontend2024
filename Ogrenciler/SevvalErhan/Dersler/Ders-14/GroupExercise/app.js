const blocks = document.querySelectorAll(".block");
const playertitle = document.querySelector(".title");
let player = "x";
let win = false;

blocks.forEach((block) => {
    block.addEventListener("click", () => choose(block));
});

function choose(block) {
    if (!win && block.textContent === "") {
        playertitle.textContent = player;
        block.textContent = player;
        player = (player === "x") ? "o" : "x";
        control();
    }
}

function control() {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ];

    lines.forEach(line => {
        const [a, b, c] = line;
        if (
            blocks[a].textContent &&
            blocks[a].textContent === blocks[b].textContent &&
            blocks[a].textContent === blocks[c].textContent
        ) {
            win = true;
            alert(`${blocks[a].textContent} kazandı!`);
        }
    });

    // Beraberlik kontrolü
    
    if (!win && Array.from(blocks).every(block => block.textContent !== "")) {
        alert("Berabere!");
    }
}
