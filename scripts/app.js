const startNewGameBtnElement = document.getElementById('new-game-vs-player');
const gameAreaElement = document.getElementById('game-board');
const newGameSection = document.getElementById('new-game');
const gameFieldElements = document.querySelectorAll('.game-area li');
const activeBox = document.querySelector('.game-box');
const gameBoardElement = document.querySelector(".game-area");
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
const selectX = document.querySelector(".for-x");
const selectO = document.querySelector(".for-o");
const hoverClass = document.querySelector(".for-x:hover");
const yourScore = document.querySelector('.your-score');
const cpuScore = document.querySelector('.cpu-score');
const nextRound = document.querySelectorAll('.button-next-round');
const roundTiedNext = document.querySelector('.round-tied').lastElementChild.lastElementChild;
const tiesOver = document.querySelector('.ties');


let xScore = 0;
let oScore = 0;
let tieScore = 0;

console.log(roundTiedNext);
const winCount = 0;



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

//for next round button 
nextRound[0].addEventListener('click', ()=> {
    startNewGame();
    oWin.style.display = 'none'
    overlay.style.display = 'none';
    
})

nextRound[1].addEventListener('click', ()=> {
    startNewGame();
    xWin.style.display = 'none'
    overlay.style.display = 'none';
    
})

roundTiedNext.addEventListener('click', ()=> {
    startNewGame();
    tied.style.display = 'none'
    overlay.style.display = 'none';
    
})