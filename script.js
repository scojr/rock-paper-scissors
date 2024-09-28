console.log("Hello World!")

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
        announceWinner("Human")
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        announceWinner("Computer")
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        announceWinner("Computer")
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        announceWinner("Human")
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        announceWinner("Human")
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        announceWinner("Computer")
    } else {
        announceWinner(false);
    }
}

// function announceWinner dynamically logs a message into the console declaring the winner every round.
function announceWinner(winner) {
    if (winner) {
        console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. ${winner} wins! The scores are Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. It's a tie! The scores are Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);