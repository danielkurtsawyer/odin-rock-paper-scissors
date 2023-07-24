let playerScore = 0; 
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const message = document.querySelector('.message');
const playerDiv = document.querySelector('.playerScore');
const computerDiv = document.querySelector('.computerScore');

buttons.forEach(btn => btn.addEventListener('click', playRound));

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

    if(playerSelection === computerSelection){
        message.textContent = 'Tie!';
        return;
    }

    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            message.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else if(computerSelection === 'paper'){
            message.textContent = `${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            message.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else if(computerSelection === 'scissors'){
            message.textContent = `${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            message.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else if(computerSelection === 'rock'){
            message.textContent = `${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
    }

    console.log(playerScore.toString());
    console.log(computerScore.toString());

    playerDiv.textContent = playerScore.toString();
    computerDiv.textContent = computerScore.toString();

    if(playerScore === 5){
        message.textContent = "Player Wins!";
        resetScore();
    }
    if(computerScore === 5){
        message.textContent = "Computer Wins!";
        resetScore();
    }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    playerDiv.textContent = playerScore.toString();
    computerDiv.textContent = computerScore.toString();
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