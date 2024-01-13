const choices = ["rock", "paper", "scissors"];
const body = document.querySelector('body');
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
const playerImage = document.getElementById('playerImage');


//SHOWING CHOICES
const rockPlayer = document.querySelector('.rockPlayer')


rockChoice.addEventListener('click', () => {
    // rockPlayer.classList.remove('rockMovePlayer');
    playGame('rock', getComputerChoice());
    rockPlayer.style.display = "block";
    rockPlayer.classList.add('rockMovePlayer');
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
        resultOutput.textContent = `Winner!`
    } else if (result === 'Lose') {
        computer_score++;
        computerScore.textContent = `${computer_score}`;
        resultOutput.textContent = `Loser!`
    } else {
        resultOutput.textContent = `Tie!`
    }
}




reset.addEventListener('click', () => {
    player_score = 0;
    computer_score = 0;
    playerScore.textContent = `${player_score}`;
    computerScore.textContent = `${computer_score}`;
    resultOutput.textContent = '';
})

