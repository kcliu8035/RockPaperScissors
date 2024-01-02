const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)]
    return result;
}

function getPlayerChoice() {
    const playerChoice = prompt('Pick a choice');
    const resultLower = playerChoice.toLowerCase();
    if (resultLower === 'rock' || resultLower === 'scissors' || resultLower === 'paper') {
        return resultLower;
    } else {
        console.log ('Pick either "rock", "paper", or "scissors".')
    }
}

function gameResult(playerSelection, computerSelection) {
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

function playRound(playerSelectionA, computerSelection) {
    const playerSelection = playerSelectionA.toLowerCase(); 
    let result = gameResult(playerSelection, computerSelection);
    
    if (result === 'Win') {
        console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n--------\nYou Win!`);
    } else if (result === 'Lose') {
        console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n--------\nYou Lose!`);
    } else {
        console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n--------\nIt's a tie!`);
    }
    
}

// function game() {
    
//     for (i = 1; i <= 5; i++) {
//         const computerSelection = getComputerChoice();
//         const playerSelection = getPlayerChoice();
//         console.log(`ROUND ${i}`);
//         playRound(playerSelection, computerSelection);   
//     }
    
// }

// const computerSelection = getComputerChoice();
// const playerSelection = getPlayerChoice();

// playRound(playerSelection, computerSelection);




// function playRound(playerSelectionA, computerSelection) {
//     const playerSelection = playerSelectionA.toLowerCase(); 

//     if ((playerSelection === "rock" && computerSelection === "scissors") ||
//         (playerSelection === "scissors" && computerSelection === "paper") ||
//         (playerSelection === "paper" && computerSelection === "rock")) {
//             console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n--------\nYou Win!`);
//         } else if ((playerSelection === "scissors" && computerSelection === "rock") ||
//                     (playerSelection == "paper" && computerSelection === "scissors") ||
//                     (playerSelection === "rock" && computerSelection === "paper")) {
//                         console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n--------\nYou Lose!`);
//         } else {
//             console.log (`Player: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}\nComputer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} \n--------\nIt's a tie!`);
//         }
// }




//################# RPS UI ################








