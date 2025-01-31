const boxes = document.querySelectorAll("div.box");
const btnStart = document.querySelector(".btn-Start");
const btnRestart = document.querySelector(".btn-Restart")
const gridPlay = document.querySelector(".grid-play")
const display = document.querySelector(".display");
const modal = document.querySelector(".modal")
const modalDisplay = document.querySelector(".modal-display")

function gameBoard() {
    return['','','','','','','','','']
}

const currentPlayer = {};

let inputFirstPlayer;
let inputSecondPlayer;
let symbolFirstPlayer;
let symbolSecondPlayer;
let arrX = [];
let arrO = [];

const winCases = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// this function checks the arrays of each player with the winning cases.
const checkWinner = (arr1, arr2) => {
    return arr2.every(el => arr1.includes(el))
}

const setWinner = (winner) => {
    display.textContent = `You won ${winner}!`;
    gridPlay.style.display = 'none';
    modal.style.display = 'flex'
    modalDisplay.textContent = 'Press restart to play again, with the same people or change names.'
}

function startGame(){
    gameBoard()
    arrX = [];
    arrO = [];

    boxes.forEach((box) => {
        box.textContent = ''
    })
    inputFirstPlayer = document.querySelector('#firstPlayer').value;
    inputSecondPlayer = document.querySelector('#secondPlayer').value;
    symbolFirstPlayer = 'X';
    symbolSecondPlayer = 'O';

    if (inputFirstPlayer === '' || inputSecondPlayer === '') {
        display.textContent = `Both players should have a name to start a game.`
    } else {
        modal.style.display = 'none'
        gridPlay.style.display = 'grid';
        btnStart.textContent = 'Restart Game';
        currentPlayer['name'] = inputFirstPlayer;
        currentPlayer['symbol'] = symbolFirstPlayer
        display.textContent = `${currentPlayer.name} start with the symbol ${currentPlayer.symbol}`
    }
}

btnStart.addEventListener('click', () => startGame())
btnRestart.addEventListener('click', () => startGame())

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        let winnerX
        let winnerO

        const boxPressed = Number(box.dataset.box)
        if (e.target.textContent === ''){
            if (currentPlayer.symbol === 'X') {
                arrX.push(boxPressed)
            } else if (currentPlayer.symbol === 'O') {
                arrO.push(boxPressed)
            }
            gameBoard[boxPressed] = currentPlayer.symbol;
            e.target.textContent = currentPlayer.symbol;
            
            
            display.textContent = `${currentPlayer.name} with the symbol ${currentPlayer.symbol}`
            winCases.forEach((c) => {
                winnerX = checkWinner(arrX, c)
                winnerO = checkWinner(arrO, c)
            if (winnerO === true || winnerX === true) {
                if (winnerO === true){
                    return setWinner(currentPlayer.name)
                } else if (winnerX === true) {
                    return setWinner(currentPlayer.name)
                }
            }
        });


            
            if (currentPlayer.symbol === 'X') {
                currentPlayer['name'] = inputSecondPlayer;
                currentPlayer['symbol'] = symbolSecondPlayer
            } else if (currentPlayer.symbol === 'O') {
                currentPlayer['name'] = inputFirstPlayer;
                currentPlayer['symbol'] = symbolFirstPlayer
            }
        }

        
    })
})