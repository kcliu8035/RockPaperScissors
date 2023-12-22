const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)]
    return result;
}

function getPlayerChoice() {
    let playerChoice = prompt('Pick a choice');
    const resultLower = playerChoice.toLowerCase();
    if (resultLower === 'rock' || resultLower === 'scissors' || resultLower === 'paper') {
        console.log(resultLower);
        return resultLower;
    } else {
        console.log ('Pick either "rock", "paper", or "scissors".')
    }
}

function playRound(playerSelectionA, computerSelection) {
    const playerSelection = playerSelectionA.toLowerCase(); 

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
            console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n\nYou Win!`);
        } else if ((playerSelection === "scissors" && computerSelection === "rock") ||
                    (playerSelection == "paper" && computerSelection === "scissors") ||
                    (playerSelection === "rock" && computerSelection === "paper")) {
                        console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n\nYou Lose!`);
        } else {
            console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n\nIt's a tie!`);
        }
}

// const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

