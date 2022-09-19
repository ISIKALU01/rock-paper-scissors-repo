# rock-paper-scissors-repo
rock, paper, scissors game repository

# Rock, Paper, Scissors: Squid Game Edition

### Table of contents
- [Project Description](#project-description)
- [Tech Used](#tech-used)
- [Features](#features)
- [Credits](#credits)
- [Connect with me](#connect-with-me)

## Project Description
- A project I made while going through [The Odin Project](https://www.theodinproject.com/).
- Instead of making another boring rock, paper, scissors game, I wanted to spice it up by referencing the popular show [Squid Game](https://www.netflix.com/title/81040344) on Netflix.

## Tech Used
- HTML 5
- CSS 3
- JavaScript

## Features
- Squid Game logo and font

- Customized player number (referencing the show) on each page load
``` javascript
    function randomPlayerNum(min, max) {
        min = Math.ceil(1);
        max = Math.floor(456);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
```

- Inserts player number into welcome message and score sections
``` javascript
    document.querySelectorAll('.player-num').forEach(num => {
        num.textContent = getPlayerNum;
    });
```

- Generates random prize shown after each game when player wins
``` javascript
    function prize(min, max) {
        min = Math.ceil(10);
        max = Math.floor(99);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
```

- Keeps score up to 5 then shows appropriate game over message
``` javascript
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
```
- On game end: 
    - Hides selection buttons
    - Displays play again button
    - Resets all variables
    - Re-runs prize function for a new prize
``` javascript
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
```

## Credits
- [Rock, Paper, Scissor icons by VectorStock](https://www.vectorstock.com/royalty-free-vector/rock-paper-scissors-hand-gesture-vector-25169733)
- ['The Final Game' font by Font Meme](https://fontmeme.com/squid-game-font/)

## Connect with me
- Twitter - [@davisleev](https://twitter.com/davisleev)