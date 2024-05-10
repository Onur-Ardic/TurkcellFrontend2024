// Çok boyutlu array
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const player1 = "X";
const player2 = "O";
let XCount = 0;
let OCount = 0;
let currentPlayer = player1;

const buttons = document.querySelectorAll(".row button")

const checkWinner = () => {
    // Yan yana
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
            board[i][0] === "X" ? XCount++ : OCount++;
            for (let j = 0; j < 3; j++) {
                const button = document.getElementById("cell" + i + j);
                button.style.backgroundColor = "yellow";
            }
            return `${board[i][0]} kazandı!`;
        }
    }
    // Üst üste
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
            board[0][i] === "X" ? XCount++ : OCount++;
            for (let j = 0; j < 3; j++) {
                const button = document.getElementById("cell" + j + i);
                button.style.backgroundColor = "yellow";
            }
            return `${board[0][i]} kazandı!`;
        }
    }
    // Çapraz
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
        board[1][1] === "X" ? XCount++ : OCount++;
        for (let i = 0; i < 3; i++) {
            const button = document.getElementById("cell" + i + i);
            button.style.backgroundColor = "yellow";
        }
        return `${board[1][1]} kazandı!`;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {
        board[1][1] === "X" ? XCount++ : OCount++;
        const crossButtons = ["cell02", "cell11", "cell20"];
        crossButtons.forEach(buttonId => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.style.backgroundColor = "yellow";
            }
        });
        return `${board[1][1]} kazandı!`;
    }
    if (gameOver()) {
        XCount++;
        OCount++;
        return "Berabere"
    }
    return null;
}

const handleClick = (row, col) => {
    if (board[row][col] === "") {
        document.getElementById("cell" + row + col).textContent = currentPlayer;
        board[row][col] = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleClick(button.id[4], button.id[5]);
        if (checkWinner() !== null) {
            buttons.forEach(button => button.disabled = true)
            document.querySelector(".counts").innerHTML = `
            <span class="fs-3 fw-bold me-5">X: ${XCount}</span>
            <span class="fs-3 fw-bold ms-5">O: ${OCount}</span>`
        }
    });
});

const reset = () => {
    buttons.forEach((button) => {
        button.textContent = ""
        button.style.backgroundColor = "";
    });
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = player1;
    buttons.forEach(button => button.disabled = false)
}

const resetScore = () => {
    XCount = 0;
    OCount = 0;
    document.querySelector(".counts").innerHTML = `<span class="fs-3 fw-bold me-5">X: ${XCount}</span>
            <span class="fs-3 fw-bold ms-5">O: ${OCount}</span>`
    reset();
}

const gameOver = () => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "") {
                return false;
            }
        }
    }
    return true;
}