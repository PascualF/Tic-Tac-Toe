const boxes = document.querySelectorAll("div.box");
const btnStart = document.querySelector(".btn-Start");
const gridPlay = document.querySelector(".grid-play")
const display = document.querySelector(".display")

let gameBoard = [
    '','','',
    '','','',
    '','',''
]

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
const checkWinner = (arr, values) => {
    values.every((v) => v.includes)
}

btnStart.addEventListener('click', (e) => {

    inputFirstPlayer = document.querySelector('#firstPlayer').value;
    inputSecondPlayer = document.querySelector('#secondPlayer').value;
    symbolFirstPlayer = 'X';
    symbolSecondPlayer = 'O';

    if (inputFirstPlayer === '' || inputSecondPlayer === '') {
        display.textContent = `Both players should have a name to start a game.`
    } else {
        gridPlay.style.display = 'grid';
        btnStart.textContent = 'Restart Game';
        currentPlayer['name'] = inputFirstPlayer;
        currentPlayer['symbol'] = symbolFirstPlayer
        display.textContent = `${currentPlayer.name} start with the symbol ${currentPlayer.symbol}`
    }
})

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        let gameFinish = false

        const boxPressed = Number(box.dataset.box)
        console.log(currentPlayer)
        if (e.target.textContent === ''){
            if (currentPlayer.symbol === 'X') {
                arrX.push(boxPressed)
            } else if (currentPlayer.symbol === 'O') {
                arrO.push(boxPressed)
            }
            gameBoard[boxPressed] = currentPlayer.symbol;
            e.target.textContent = currentPlayer.symbol;
            if (currentPlayer.symbol === 'X') {
                currentPlayer['name'] = inputSecondPlayer;
                currentPlayer['symbol'] = symbolSecondPlayer
            } else if (currentPlayer.symbol === 'O') {
                currentPlayer['name'] = inputFirstPlayer;
                currentPlayer['symbol'] = symbolFirstPlayer
            }
        }

        console.log('arrX ' + arrX)
        console.log('arrO ' + arrO)
        winCases.forEach((c) => {
            console.log(checkWinner())
            console.log(checkWinner())
        });
        display.textContent = `${currentPlayer.name} start with the symbol ${currentPlayer.symbol}`
        
    })
})