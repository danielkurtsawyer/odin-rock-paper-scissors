function getComputerChoice() {
    let rand  = Math.floor(Math.random() * 3);
    if(rand === 0){
        return 'rock';
    } else if(rand === 1){
        return 'paper';
    }else {
        return 'scissors';
    }
}

function playRound(e){
    computerSelection = getComputerChoice();
    playerSelection = e.target.classList.value;

    
    /*
    playerSelection = playerSelection.toUpperCase();

    if(playerSelection === computerSelection){
        return 0;
    }

    if(playerSelection === 'ROCK'){
        if(computerSelection === 'PAPER'){
            return -1;
        } else if(computerSelection === 'SCISSORS'){
            return 1;
        }
    } else if(playerSelection === 'PAPER'){
        if(computerSelection === 'ROCK'){
            return 1;
        } else if(computerSelection === 'SCISSORS'){
            return -1;
        }
    } else if(playerSelection === 'SCISSORS'){
        if(computerSelection === 'ROCK'){
            return -1;
        } else if(computerSelection === 'PAPER'){
            return 1;
        }
    }
    */
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){
        playerSelection = prompt("Please type rock, paper, or scissors:");
        roundResult = playRound(playerSelection, getComputerChoice());

        console.group('Round ' + i);
        if(roundResult === 0){
            console.log('Round tie');
        } else if(roundResult > 0){
            console.log('Player wins the round');
            playerScore++;
        } else{
            console.log('Computer wins the round');
            computerScore++;
        }

        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
        console.groupEnd();
    }

    if(playerScore === computerScore){
        console.log('Game tie!');
    } else if(playerScore > computerScore){
        console.log('Player wins the game!');
    } else{
        console.log('Computer wins the game!');
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', playRound));
