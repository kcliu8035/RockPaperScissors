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
const paperPlayer = document.querySelector('.paperPlayer')
const scissorsPlayer = document.querySelector('.scissorsPlayer')

const rockComputer = document.querySelector('.rockComputer');
const paperComputer = document.querySelector('.paperComputer');
const scissorsComputer = document.querySelector('.scissorsComputer');


function computerMove() {
    if(getComputerChoice() === 'rock') {
        rockComputer.style.display = "block";
        rockComputer.classList.add('rockMoveComputer');
    } else if(getComputerChoice() === 'paper') {
        paperComputer.style.display = "block";
        paperComputer.classList.add('paperMoveComputer');
    } else if(getComputerChoice() === 'scissors') {
        scissorsComputer.style.display = "block";
        scissorsComputer.classList.add('scissorsMoveComputer');
    }
}

rockChoice.addEventListener('click', () => {
    playGame('rock', getComputerChoice());
    rockPlayer.style.display = "block";
    rockPlayer.classList.add('rockMovePlayer');
})

paperChoice.addEventListener('click', () => {
    playGame('paper', getComputerChoice());
    paperPlayer.style.display = "block";
    paperPlayer.classList.add('paperMovePlayer');
})

scissorsChoice.addEventListener('click', () => {
    playGame('scissors', getComputerChoice());
    scissorsPlayer.style.display = "block";
    scissorsPlayer.classList.add('scissorsMovePlayer');
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
    reset.style.display = "inline";
    clearElements();
    computerMove();
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


function clearElements() {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
        // PLAYER SELECTION
        rockPlayer.style.display = "none";
        element.classList.remove('rockMovePlayer');

        paperPlayer.style.display = "none";
        element.classList.remove('paperMovePlayer');

        scissorsPlayer.style.display = "none";
        element.classList.remove('scissorsMovePlayer');

        // COMPUTER SELECTION
        rockComputer.style.display = "none";
        rockComputer.classList.remove('rockMoveComputer');

        paperComputer.style.display = "none";
        paperComputer.classList.remove('paperMoveComputer');

        scissorsComputer.style.display = "none";
        scissorsComputer.classList.remove('scissorsMoveComputer');
    });    
}

reset.addEventListener('click', () => {
    clearElements();
    player_score = 0;
    computer_score = 0;
    playerScore.textContent = `${player_score}`;
    computerScore.textContent = `${computer_score}`;
    resultOutput.textContent = '';
})


//NOTES:
// - Need to figure out how to remove classList properly so image disappears when choice re-clicked.
// - Need to ensure classes are removed as well when reset button is clicked.