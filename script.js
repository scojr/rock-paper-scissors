// function getComputerChoice randomly chooses between the strings "rock", "paper" or "scissors".
function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    if (choice === 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function getHumanChoice uses a prompt method to allow the user to input their choice between "rock", "paper" or "scissors".
function getHumanChoice() {
    let choice = prompt("Choose \"Rock\", \"Paper\" or \"Scissors\"");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

// function playRound takes the return value of getComputerChoice() and getPlayerChoice() as arguments, plays a single round, increments the appropriate round winner's score, and logs a winner announcement.
function playRound(computerChoice,humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        announceWinner("human")
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        announceWinner("computer")
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        announceWinner("computer")
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        announceWinner("human")
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        announceWinner("human")
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        announceWinner("computer")
    } else if (computerChoice === humanChoice){
        announceWinner("tie");
    } else {
        computerScore++;
        announceWinner("invalid");
    }
}

// function announceWinner dynamically logs a message into the console declaring the winner every round.
function announceWinner(winner) {
    if (winner === "computer") {
        console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. Computer wins! The scores are Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (winner === "human") {
        console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. Human wins! The scores are Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (winner === "tie") {
        console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. It's a tie! The scores are Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`Human chose "${humanSelection}", an invalid answer. Computer wins by default! The scores are Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);