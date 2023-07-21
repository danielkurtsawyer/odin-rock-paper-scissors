function getComputerChoice() {
    let rand  = Math.floor(Math.random() * 3);
    if(rand === 0){
        return 'ROCK';
    } else if(rand === 1){
        return 'PAPER';
    }else {
        return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if(playerSelection === 'ROCK'){
        if(computerSelection === 'PAPER'){
            return 'You lose! Paper beats Rock';
        } else if(computerSelection === 'SCISSORS'){
            return 'You win! Rock beats Paper';
        }
    } else if(playerSelection === 'PAPER'){
        if(computerSelection === 'ROCK'){
            return 'You win! Rock beats Paper';
        } else if(computerSelection === 'SCISSORS'){
            return 'You lose! Scissors beats paper';
        }
    } else if(playerSelection === 'SCISSORS'){
        if(computerSelection === 'ROCK'){
            return 'You lose! Rock beats Scissors';
        } else if(computerSelection === 'PAPER'){
            return 'You win! Scissors beats Paper';
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


