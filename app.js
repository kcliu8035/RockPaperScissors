const choices = ["rock", "paper", "scissors"];
const rockChoice = document.getElementById('rockChoice');
const paperChoice = document.getElementById('paperChoice');
const scissorsChoice = document.getElementById('scissorsChoice');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const computerSelection = getComputerChoice();
const reset = document.getElementById('resetBTN');
let player_score = 0;
let computer_score = 0;


rockChoice.addEventListener('click', () => {
    playGame('rock', computerSelection);
})

paperChoice.addEventListener('click', () => {
    playGame('paper', computerSelection);
})

scissorsChoice.addEventListener('click', () => {
    playGame('scissors', computerSelection);
})

function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

function checkWinner(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
                return 'Win';
    } else if ((playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection == "paper" && computerSelection === "scissors") ||
            (playerSelection === "rock" && computerSelection === "paper")) {
                return 'Lose';
    } else {
                return 'Tie';
    }

}

function playGame(playerSelection, computerSelection) {
    let result = checkWinner();
    if (result === 'Win') {
        player_score++;
        console.log('winner');
    } else if (result === 'Lose') {
        computer_score++;
        console.log('lose');
    } else {
        // console.log('tie');
        console.log(result);
    }
}

function keepScore() {

}

reset.addEventListener('click', () => {
    player_score = 0;
    computer_score = 0;
    console.log('click');
})