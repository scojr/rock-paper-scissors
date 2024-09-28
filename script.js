playGame();

//function playGame contains the logic for the game, keeps track of scores, and declares a winner after 5 rounds.
function playGame() {
    
    // initialize scores to 0
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    
    // for round is less than 5, play another round increment the round number, and check if it's the final round
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}/5`);
        playRound();
        checkRound(round);
    }
    
    // function playRound takes the return value of getComputerChoice() and getPlayerChoice() as arguments, plays a single round, increments the appropriate round winner's score, and logs a winner announcement using announceWinner()
    function playRound(computerChoice,humanChoice) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (computerSelection === "rock" && humanSelection === "paper") {
            humanScore++;
            announceWinner("human")
        } else if (computerSelection === "rock" && humanSelection === "scissors") {
            computerScore++;
            announceWinner("computer")
        } else if (computerSelection === "paper" && humanSelection === "rock") {
            computerScore++;
            announceWinner("computer")
        } else if (computerSelection === "paper" && humanSelection === "scissors") {
            humanScore++;
            announceWinner("human")
        } else if (computerSelection === "scissors" && humanSelection === "rock") {
            humanScore++;
            announceWinner("human")
        } else if (computerSelection === "scissors" && humanSelection === "paper") {
            computerScore++;
            announceWinner("computer")
        } else if (computerSelection === humanSelection){
            announceWinner("tie");
        } else {
            computerScore++;
            announceWinner("invalid");
        }
        // function announceWinner dynamically logs a message into the console declaring the winner every round. If the player types an invalid response the point will be awarded to the computer.
        function announceWinner(winner) {
            if (winner === "computer") {
                console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. Computer wins!`);
            } else if (winner === "human") {
                console.log(`Human chose ${humanSelection}, and computer chose ${computerSelection}. Human wins!`);
            } else if (winner === "tie") {
                console.log(`Human and computer chose ${humanSelection}. It's a tie!`);
            } else {
                console.log(`Human chose "${humanSelection}", an invalid answer. Computer wins by default!`);
            }
            console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
            console.log("---------------------------")
        }
    }

    // function checkRound checks to see if we're on the final round before tallying up the final scores and logging the winner
    function checkRound(round) {
        if (round === 5) {
            console.log(`Our final scores are:`);
            console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
            if (humanScore === computerScore) {
                console.log("No winners today! That's a tie!");
            } else if (humanScore > computerScore) {
                console.log("Human wins the game!");
            } else {
                console.log("Computer wins the game!");
            }
        }  
    }
}


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
    let choice = prompt("Type \"Rock\", \"Paper\" or \"Scissors\"");
    return choice.toLowerCase();
}