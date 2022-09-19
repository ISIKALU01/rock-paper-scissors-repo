//initialize options array which will be used to randomize for computer choice.

const options = ['Rock', 'Paper', 'scissors'];
//Get a reference to the following element nodes with queryselector method.
//Target and select the options element node so it can be accessible in the DOM.
const optionSection = document.querySelector('.options');
//Target and select rock, paper and scissors element nodes so they can be accessible in the DOM.
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//Target and select playerScore and computerScore element nodes so they can be accessible in the dom.
const userScore = document.querySelector('#playerScore');
const compScore = document.querySelector('#computerScore');

//Target and select the resetgame element node so it can be accessible in the dom.
const resetButton = document.querySelector('.reset-game');
//Target and select the update element node so it can be accessible in the dom.
const update = document.querySelector('.update');
//Target and select the gameoverupdate element node so it can be accessible in the dom.
const gameoverUpdate = document.querySelector('.gameover-update');

//declare and initialize following variables
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let getPlayerNum = 0;


//Randomly pick an option for computer
function getComputerChoice(){
    arr = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

//generate number between 1 and 10 for random player num 
function randomPlayerNum(min,max){
    min = Math.ceil(1)//rounds its numeric argument to a higher value.
    max = Math.floor(10)//rounds it numeric argument to a lower value.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//call function randomPlayerNum and assign to getPlayerNum variable.
getPlayerNum = randomPlayerNum();

// Insert random player number in all elements required.
document.querySelectorAll('.player-num').forEach(num => {
    num.textContent = getPlayerNum;
});


// Toggles which elements show for end of game
function toggleHide() {
    rock.classList.toggle('hide');
    paper.classList.toggle('hide');
    scissors.classList.toggle('hide');
    resetButton.classList.toggle('hide');
    update.classList.toggle('hide');
    gameoverUpdate.classList.toggle('hide');
}

//this resets the game 
function resetGame(){
    toggleHide();
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = '0';
    compScore.textContent = '0';
    update.textContent = '';
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toUpperCase();//this returns a random value from the getComputerChoice().
    if(playerSelection === computerSelection){
        update.textContent = `this is a tie computer selected ${computerSelection}`
    }
    else if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      update.textContent = `you have won this round ${playerSelection} beats ${computerSelection}`
      
    }else if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      update.textContent = `Computer won this round ${computerSelection} beats ${playerSelection}`

    }

    compScore.textContent = computerScore;
    userScore.textContent = playerScore;
    gameOver(playerScore,computerScore);
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        toggleHide();
        gameoverUpdate.textContent = `You have defeated computer in this game. Well done!`;
    } else if (computerScore === 5) {
        toggleHide();
        gameoverUpdate.textContent = `Computer has won this game. Better luck next time!`;
    } else {
        return update;
    }
}

rock.addEventListener('click', () => {
    playerSelection = 'Rock'.toUpperCase();
    playRound(playerSelection);
});

paper.addEventListener('click', () => {
    playerSelection = 'Paper'.toUpperCase();
    playRound(playerSelection)
});
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors'.toUpperCase();
    playRound(playerSelection)
});

resetButton.addEventListener('click', resetGame);