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
        }, 1500);
    }
    kazandiMi()
    berabereMi()

    if (gameOver) {
        winnerPlayer.classList.remove("d-none")
        winnerPlayer.classList.add("text-warning")
        currentPlayer.classList.add("d-none")
        winnerPlayer.textContent = `Oyun bitti! Kazanan: ${winner}`
        blocks.forEach(block => block.style.pointerEvents = 'none')
    }
}

const playerDegistir = () => {
    player = (player == "X") ? "O" : "X"
    currentPlayer.textContent = `${player}'s Turn!`
}

const kazandiMi = () => {
    satirKontrolEt()
    sutunKontrolEt()
    caprazKontrolEt()
}

const satirKontrolEt = () => {
    let satir1 = blocks[0].textContent == blocks[1].textContent
        && blocks[0].textContent == blocks[2].textContent
        && blocks[0].textContent != ""
    let satir2 = blocks[3].textContent == blocks[4].textContent
        && blocks[3].textContent == blocks[5].textContent
        && blocks[3].textContent != ""
    let satir3 = blocks[6].textContent == blocks[7].textContent
        && blocks[6].textContent == blocks[8].textContent
        && blocks[6].textContent != ""

    if (satir1 || satir2 || satir3) {
        gameOver = true;
    }

    //eğer kazanan bu satirlardan biriyse bunun içindeki değeri al ve onu winner yap zaten 1 tanesi yetiyor
    if (satir1) return winner = blocks[0].textContent
    if (satir2) return winner = blocks[3].textContent
    if (satir3) return winner = blocks[6].textContent
}
const sutunKontrolEt = () => {
    let sutun1 = blocks[0].textContent == blocks[3].textContent
        && blocks[0].textContent == blocks[6].textContent
        && blocks[0].textContent != ""
    let sutun2 = blocks[1].textContent == blocks[4].textContent
        && blocks[1].textContent == blocks[7].textContent
        && blocks[1].textContent != ""
    let sutun3 = blocks[2].textContent == blocks[5].textContent
        && blocks[2].textContent == blocks[8].textContent
        && blocks[2].textContent != ""

    if (sutun1 || sutun2 || sutun3) {
        gameOver = true;
    }

    if (sutun1) return winner = blocks[0].textContent
    if (sutun2) return winner = blocks[1].textContent
    if (sutun3) return winner = blocks[2].textContent

}
const caprazKontrolEt = () => {
    let capraz1 = blocks[0].textContent == blocks[4].textContent
        && blocks[0].textContent == blocks[8].textContent
        && blocks[0].textContent != ""
    let capraz2 = blocks[2].textContent == blocks[4].textContent
        && blocks[2].textContent == blocks[6].textContent
        && blocks[2].textContent != ""

    if (capraz1 || capraz2) {
        gameOver = true;
    }

    if (capraz1) return winner = blocks[0].textContent
    if (capraz2) return winner = blocks[2].textContent
}

const berabereMi = () => {
    const degerler = [];
    blocks.forEach(block => degerler.push(block.textContent))
    if (!degerler.includes("")) {
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