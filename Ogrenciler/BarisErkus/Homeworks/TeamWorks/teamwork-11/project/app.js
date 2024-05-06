let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

const buttons = document.querySelectorAll(".row button")

const handleClick = (row, col) => {
    if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        document.getElementById("cell" + row + col).textContent = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}

const checkWinner = () => {
    // Yan yana
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
            return board[i][0] === player1 ? "Player 1 kazandı" : "Player 2 kazandı";
        }
    }
    // Üst üste
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
            return board[0][i] === player1 ? "Player 1 kazandı" : "Player 2 kazandı";
        }
    }
    // Çapraz
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ""
        ||
        board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {
        return board[1][1] === player1 ? "Player 1 kazandı" : "Player 2 kazandı";
    }
    return null;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleClick(button.id[4], button.id[5]);
        checkWinner() !== null ? alert(checkWinner()) : null
    });
});

const reset = () => {
    buttons.forEach((button) => {
        button.textContent = ""
    });
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
}