
//function for start new game
function startNewGame() {
    // selectPlayer(0);
    if(activePlayer !== null) {
        gameAreaElement.style.display = 'flex';
        newGameSection.style.display = 'none';
        resetGameStatus();
        currentRound = 1;
    } 

    gameFieldElements.forEach((field) => {

        if (field.classList.contains("game-box-hover-x")) {
            field.classList.remove("game-box-hover-x");
        } else if (field.classList.contains("game-box-hover-o")) {
            field.classList.remove("game-box-hover-o");
        }

        field.addEventListener("mousemove", () => {
          if (field.children.length == 0) {
              if (activePlayer === 0) {
                field.classList.add("game-box-hover-x");
              } else {
                field.classList.add("game-box-hover-o");
              }
          }
        });
        field.addEventListener("mouseout", () => {
          if (field.children.length == 0) {
              if (activePlayer === 0) {
              field.classList.remove("game-box-hover-x");
              } else {
              field.classList.remove("game-box-hover-o");
              }
          }
        });
      });
}

//for using this function, you can choose your player
function selectPlayer(select){
    activePlayer = select;
    

    if(activePlayer === 0) {
        selectX.classList.add('forHover'); 
        selectO.classList.remove('forHover');
        yourScore.firstElementChild.textContent = 'X (YOU)';
        cpuScore.firstElementChild.textContent = 'O (CPU)';
        document.getElementById("turn-o").style.display = "none";
        document.getElementById("turn-x").style.display = "inline";

    } 
    if(activePlayer === 1) {
        selectO.classList.add('forHover');
        selectX.classList.remove('forHover');
        yourScore.firstElementChild.textContent = 'X (CPU)';
        cpuScore.firstElementChild.textContent = 'O (YOU)';
        document.getElementById("turn-o").style.display = "inline";
        document.getElementById("turn-x").style.display = "none";
    
}
console.log(activePlayer);
}


//this function will switch players
function switchPlayer() {

    if(activePlayer === 0) {
        activePlayer = 1;
        document.getElementById("turn-o").style.display = "inline"
        document.getElementById("turn-x").style.display = "none"
        
    } else {
        activePlayer = 0;
        document.getElementById("turn-o").style.display = "none"
        document.getElementById("turn-x").style.display = "inline"
    }


}

function CPU_Move() {
    console.warn('hereee', gameFieldElements)
    for (let i = 0; i < gameData.length; i++) {
        console.warn(gameData[i], i, gameData[i].indexOf(0), (i*3)+gameData[i].indexOf(0))
        if (gameData[i].indexOf(0) >= 0) {
            if (gameFieldElements[(i*3)+gameData[i].indexOf(0)].children.length == 0) {

                gameFieldElements[(i*3)+gameData[i].indexOf(0)].innerHTML = imgO;

                gameData[i][gameData[i].indexOf(0)] = activePlayer + 1;
                switchPlayer();
                showWin(checkForGameOver());
                currentRound = currentRound +1;
                return;
            }
        }
    }

}

//function for select game field
function selectGameField(event) {
    const selectedField = event.target;
    if (event.target.tagName !== 'LI' || event.target.children.length !== 0) {
        return;
    }
    if(activePlayer === 0) {
        selectedField.innerHTML = imgX;
        selectedField.classList.add('game-box-hover-x');
    }else {
        selectedField.innerHTML = imgO;
        // selectGameField.classList.add('game-box-hover-o')
    }

const selectedColumn = selectedField.dataset.col - 1;
const selectedRow= selectedField.dataset.row - 1;



    if(gameData[selectedRow][selectedColumn] > 0){
        return;
    }

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    showWin(checkForGameOver());
    currentRound = currentRound +1;
    
    switchPlayer();
    // CPU_Move();
}

function showWin(winnerId) {
    

    if (winnerId !== 0) {
        endGame(winnerId);

        if(winnerId === 1) {
            xWin.style.display ='flex';
            overlay.style.display = 'block';
            xScore++;
            yourScore.lastElementChild.textContent = xScore;
        }
        if (winnerId === 2) {
            oWin.style.display ='flex';
            overlay.style.display = 'block';
            oScore++;
            cpuScore.lastElementChild.textContent = oScore;
        } 
        if(winnerId === -1) {
            tied.style.display ='flex';
            overlay.style.display = 'block';
             tieScore++;
             tiesOver.lastElementChild.textContent = tieScore;
        }
    }
}

//function for check who is winner
function checkForGameOver() {
    
    //checking the rows for equality
    for(let i = 0; i < 3; i ++) {
        if(gameData[i][0] > 0 &&
           gameData[i][0] === gameData[i][1] &&
           gameData[i][1] === gameData[i][2] )
            {
                return gameData[i][0];
            }
            
    }
    //checking for columns for equality
    for(let i = 0; i < 3; i ++) {
        if(gameData[0][i] > 0 &&
           gameData[0][i] === gameData[1][i] &&
           gameData[0][i] === gameData[2][i] )
            {
                return gameData[0][i];
            }
    }
    // diagonal: top left to bottom right
    if (gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1] && 
        gameData[1][1] === gameData[2][2]) {

            return gameData[0][0];
    }

    // diagonal: bottom left to top right
    if (gameData[2][0] > 0 && 
        gameData[2][0] === gameData[1][1] && 
        gameData[1][1] === gameData[0][2]) {

            return gameData[2][0];
    }

    if(currentRound === 9) {
        return -1;
    }

    return 0;
    
}


function endGame(winnerId) {

    gameResult.style.display ='block';
}




function resetGameStatus() {

    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            gameBoardElement.children[gameBoardIndex].textContent = '';
            gameBoardIndex++;
        }
    }
}


