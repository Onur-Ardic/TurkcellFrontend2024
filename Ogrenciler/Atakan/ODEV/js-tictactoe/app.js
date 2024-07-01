const currentPlayer = document.querySelector(".currentPlayer")
const winnerPlayer = document.querySelector(".winnerPlayer")
const blocks = document.querySelectorAll(".col")
let player = "X"
let gameOver = false;
let winner;

const startGame = () => {
    currentPlayer.textContent = `${player}'s Turn!`
    blocks.forEach(block => block.addEventListener("click",
        () => bolgeSec(block)))
}

const bolgeSec = (block) => {
    if (block.textContent == "") {
        block.textContent = player;
        block.style.color = (player === "X") ? "red" : "green";
        playerDegistir();
    }
    else {
        block.classList.add("border-danger", "text-warning");
        setTimeout(() => {
            block.classList.remove("border-danger", "text-warning");
        }, 1000);
    }
    kazandiMi()
    berabereMi()

    if (gameOver) {
        winnerPlayer.classList.remove("d-none")
        winnerPlayer.classList.add("text-warning")
        currentPlayer.classList.add("d-none")
        winnerPlayer.textContent = `Game is Over! Winner: ${winner}`
        blocks.forEach(block => block.style.pointerEvents = 'none')
    }
}

const playerDegistir = () => {
    player = (player == "X") ? "O" : "X"
    currentPlayer.textContent = `${player}'s Turn!`
}

const kazandiMi = () => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (blocks[a].textContent == blocks[b].textContent
            && blocks[a].textContent == blocks[c].textContent
            && blocks[a].textContent != "") {
            gameOver = true;
            return winner = blocks[a].textContent;
        }
    }
}

const berabereMi = () => {
    const blockTextContents = [];
    blocks.forEach(block => blockTextContents.push(block.textContent))
    if (!blockTextContents.includes("")) {
        currentPlayer.classList.add("text-info")
        currentPlayer.textContent = "Berabere!"
        blocks.forEach(block => block.style.pointerEvents = 'none')
    }
}

const sifirla = () => {
    blocks.forEach(block => block.textContent = "");
    gameOver = false;
    winner = undefined;
    winnerPlayer.classList.add("d-none");
    currentPlayer.classList.remove("d-none");
    currentPlayer.textContent = `Player: ${player}`;
    blocks.forEach(block => block.style.pointerEvents = 'auto');
}
startGame()