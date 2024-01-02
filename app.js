const choices = ["rock", "paper", "scissors"];
const rockChoice = document.getElementById('rockChoice');
const paperChoice = document.getElementById('paperChoice');
const scissorsChoice = document.getElementById('scissorsChoice');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const computerSelection = getComputerChoice();
const resultOutput = document.getElementById('output');
const reset = document.getElementById('resetBTN');
let player_score = 0;
let computer_score = 0;


rockChoice.addEventListener('click', () => {
    playGame('rock', getComputerChoice());
})

paperChoice.addEventListener('click', () => {
    playGame('paper', getComputerChoice());
})

scissorsChoice.addEventListener('click', () => {
    playGame('scissors', getComputerChoice());
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
    let result = checkWinner(playerSelection, computerSelection);
    if (result === 'Win') {
        player_score++;
        playerScore.textContent = `${player_score}`;
        resultOutput.textContent = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. You win!`
        // console.log(`Win: ${playerSelection} + ${computerSelection} ${result} PS:${player_score} CS:${computer_score}`);
    } else if (result === 'Lose') {
        computer_score++;
        computerScore.textContent = `${computer_score}`;
        resultOutput.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. You lose!`
        // console.log(`Lose: ${playerSelection} + ${computerSelection} ${result} PS:${player_score} CS:${computer_score}`);
    } else {
        resultOutput.textContent = `Player and Computer both chose ${playerSelection}. It's a tie!`
        console.log(`Tie: ${playerSelection} + ${computerSelection} ${result} PS:${player_score} CS:${computer_score}`);
    }
}




reset.addEventListener('click', () => {
    player_score = 0;
    computer_score = 0;
    playerScore.textContent = `${player_score}`;
    computerScore.textContent = `${computer_score}`;
    resultOutput.textContent = '';
})