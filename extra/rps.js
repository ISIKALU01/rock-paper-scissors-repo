//declare variables roundwinner, playerScore, computerScore.
let roundWinner = ''// this will be used to store a roundwinner value after a game round.
let playerScore = ''//this will be used to increment player score after winning a round.
let computerScore = ''//this will be used to increment computer score after winning a round.

//this function returns a random value from the array representng computer choice.
function getComputerChoice(){
    arr = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

//console.log(getComputerChoice());

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
//this function takes two arguements. The playerSelection and computerSelection.
function playRound(playerSelection, computerSelection){
        //the upperCase() makes both parameters case-insensitive so users can input different forms
        //of rock, paper and scissors and will be converted to uppercase.
        playerSelection = prompt("enter a value").toUpperCase();//this will request player to input value.
        computerSelection = getComputerChoice().toUpperCase();//this returns a random value from the getComputerChoice().
        if (playerSelection === computerSelection) {
          roundWinner = `it's a tie`
        }else if (
          (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
          (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
          (playerSelection === 'PAPER' && computerSelection === 'ROCK')
        ) {
          roundWinner = 'player wins'
        }else if (
          (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
          (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
          (computerSelection === 'PAPER' && playerSelection === 'ROCK')
        ) {
          roundWinner = 'computer wins'
        }
        //alert(`computer returns ${computerSelection}`)
        //updateScoreMessage(roundWinner, playerSelection, computerSelection)
        return roundWinner
        
      }

      //Feel free to create more “helper” functions if you think it would be useful.
function game(){ //the game function houses the playRound() for a five rounds game set with a for loop.
    //it also contains results of each round and returns final result of the five rounds and the winner.

  for(i=0; i<5; i++){//the for loop iterates 5 times for a 5 rounds game. The first iteration:
    result = playRound()//calls the playRound function and stores output in result variable.
    if(result === "computer wins"){//checks value of result and if computer wins round add 1 to computers score.
      computerScore++
      console.log(`computer has scored ${computerScore}`)
      
    }else if(result === "player wins"){//else if player wins add 1 to player score
      playerScore++
      console.log(`player has scored ${playerScore}`)
    }else{//else if playround returns a tie round.
      console.log("a tie round")
    }
  }
  //after the loop iterates 5 times the loop exits. Now we set another condition to check final winner.
  if(playerScore === computerScore){
    console.log("it is a tie")
  }
  else if(playerScore > computerScore){
    console.log('Player wins')
  }else if(computerScore > playerScore){
    console.log('computer wins')
  }
}

game();
