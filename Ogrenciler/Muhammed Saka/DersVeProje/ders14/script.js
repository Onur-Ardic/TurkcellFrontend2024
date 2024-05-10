let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function checkWinner() {
    // Rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
    }
    // Columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }
    // Diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }
    // Check for tie
    let isTie = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                isTie = false;
                break;
            }
        }
    }
    if (isTie) {
        return 'Tie';
    }
    return null;
}

function move(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
        let winner = checkWinner();
        if (winner !== null) {
            if (winner === 'Tie') {
                document.getElementById('result').innerText = 'Oyun berabere!';
            } else {
                document.getElementById('result').innerText = `Oyunu kazanan: ${winner}`;
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function reset() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    document.getElementById('result').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
