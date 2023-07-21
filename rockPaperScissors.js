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

    if(playerSelection === computerSelection){
        return 'Tie!';
    }

    if(playerSelection === 'ROCK'){
        if(computerSelection === 'PAPER'){
            return 'You lose! Paper beats Rock';
        } else if(computerSelection === 'SCISSORS'){
            return 'You win! Rock beats Scissors';
        }
    } else if(playerSelection === 'PAPER'){
        if(computerSelection === 'ROCK'){
            return 'You win! Paper beats Rock';
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

function game(){
    for(let i = 1; i <= 5; i++){
        playerSelection = prompt("Please type rock, paper, or scissors:");

        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game();



