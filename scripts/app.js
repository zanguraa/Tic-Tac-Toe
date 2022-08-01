const startNewGameBtnElement = document.getElementById('new-game-vs-player');
const gameAreaElement = document.getElementById('game-board');
const newGameSection = document.getElementById('new-game');
const gameFieldElements = document.querySelectorAll('.game-area li');
const activeBox = document.getElementsByClassName('game-box');
const gameBoardElement = document.getElementsByClassName("game-area");
const gameResult = document.getElementById('game-resultat'); 
const xWin = document.getElementById("playerx");
const oWin = document.getElementById("playero");
const tied = document.getElementById('tied-game');
const restartGame = document.getElementById("restart-game-menu");
const restartMenu = document.getElementById("restart");
const restartYes = document.querySelector('.button-restart');
const overlay = document.querySelector(".overlay");
const cancelButton = document.querySelector(".button-cancel")
const quitButton = document.querySelectorAll(".button-quit");
const tiedQuitButton = document.querySelector('.button-quit-tied');

startNewGameBtnElement.addEventListener('click', startNewGame);

let activePlayer = null;
let currentRound = 1;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


const imgX = "<img src=./assets/icon-x.svg>";
const imgO = "<img src=./assets/icon-o.svg>";


for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}

restartGame.addEventListener('click', ()=> {
    restartMenu.style.display = 'flex';
    overlay.style.display = 'block';
})

cancelButton.addEventListener('click', ()=> {
    restartMenu.style.display = 'none'
    overlay.style.display = 'none';
})

restartYes.addEventListener('click', ()=> {
    window.location.reload();
})

//for buttons QUIT
console.log(tiedQuitButton);

    quitButton[0].addEventListener('click', ()=> {
        window.location.reload();
    })
    quitButton[1].addEventListener('click', ()=> {
        window.location.reload();
    })
    quitButton[2].addEventListener('click', ()=> {
        window.location.reload();
    })
    quitButton[3].addEventListener('click', ()=> {
        window.location.reload();
    })

    tiedQuitButton.addEventListener('click', ()=> {
        window.location.reload();
    })

