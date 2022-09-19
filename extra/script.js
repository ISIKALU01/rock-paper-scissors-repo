const options = ['Rock', 'Paper', 'Scissors'];
const optionsSection = document.querySelector('.options');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('#playerScore');
const frontmanScore = document.querySelector('#frontmanScore');
const resetButton = document.querySelector('.reset-game');
const update = document.querySelector('.update');
const gameoverUpdate = document.querySelector('.gameover-update');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let getPlayerNum = 0;
let prizeMoney = 0;

// Randomly pick option for computer
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Generate number between 1-456 for random player number
function randomPlayerNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(456);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getPlayerNum = randomPlayerNum();

// Insert random player number into welcome message
document.querySelectorAll('.player-num').forEach(num => {
    num.textContent = getPlayerNum;
});

// Generate random number for prize shown at end of game
function prize(min, max) {
    min = Math.ceil(10);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

prizeMoney = prize();

// Toggles which elements show for end of game
function toggleHide() {
    rock.classList.toggle('hide');
    paper.classList.toggle('hide');
    scissors.classList.toggle('hide');
    resetButton.classList.toggle('hide');
    update.classList.toggle('hide');
    gameoverUpdate.classList.toggle('hide');
}

function resetGame() {
    toggleHide();
    prize();
    prizeMoney = prize();
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = '0';
    frontmanScore.textContent = '0';
    update.textContent = '';
}

// Take players selection, compare it to 'computerPlay' then return winner
function keepScore(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') {
        playerScore++;
        update.textContent = 'The Front Man picked Scissors, you win this round!';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') {
        computerScore++;
        update.textContent = 'The Front Man picked Paper, you lose this round!';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') {
        playerScore++;
        update.textContent = 'The Front Man picked Rock, you win this round!';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') {
        computerScore++;
        update.textContent = 'The Front Man picked Scissors, you lose this round!';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock') {
        computerScore++;
        update.textContent = 'The Front Man picked Rock, you lose this round!';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') {
        playerScore++;
        update.textContent = 'The Front Man picked Paper, you win this round!';
    } else {
        update.textContent = `The Front Man also picked ${playerSelection}. Go again!`;
    }
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        toggleHide();
        gameoverUpdate.textContent = `Way to go! $${prizeMoney},000,000 will be desposited into your account!`;
    } else if (computerScore === 5) {
        toggleHide();
        gameoverUpdate.textContent = `Looks like you're going home empty handed. Better luck next time!`;
    } else {
        return update;
    }
}

function playRound() {
    computerSelection = computerPlay();
    keepScore(playerSelection, computerSelection);
    frontmanScore.textContent = computerScore;
    userScore.textContent = playerScore;
    gameOver(playerScore, computerScore);
}

rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    playRound();
});

paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    playRound()
});
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playRound()
});

resetButton.addEventListener('click', resetGame);