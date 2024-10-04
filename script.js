playGame();

//function playGame contains the logic for the game, keeps track of scores, and declares a winner after 5 rounds.
function playGame() {
    
    // initialize scores to 0
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;


    let buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", (event) => {playRound(getComputerChoice(),event.target.id); });

    function playRound(computerChoice,humanChoice) {
        round++;
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
        // function announceWinner dynamically logs a message into the console declaring the winner every round. If the player types an invalid response the point will be awarded to the computer.
        function announceWinner(winner) {
            let scoresList = document.querySelector("#scoresList");
            let currentScore= document.querySelector("#results");
            let newScore = document.createElement("li");
            if (winner === "computer") {
                console.log(`Human chose ${humanChoice}, and computer chose ${computerChoice}. Computer wins round ${round}!`);
                newScore.textContent = (`Human chose ${humanChoice}, and computer chose ${computerChoice}. Computer wins round ${round}!`);
            } else if (winner === "human") {
                console.log(`Human chose ${humanChoice}, and computer chose ${computerChoice}. Human wins round ${round}!`);
                newScore.textContent = (`Human chose ${humanChoice}, and computer chose ${computerChoice}. Human wins round ${round}!`);
            } else if (winner === "tie") {
                console.log(`Human and computer chose ${humanChoice}. It's a tie for round ${round}!`);
                newScore.textContent = (`Human and computer chose ${humanChoice}. It's a tie for round ${round}!`);
            } else {
                console.log(`Human chose "${humanChoice}", an invalid answer. Computer wins round ${round} by default!`);
                newScore.textContent = (`Human chose "${humanChoice}", an invalid answer. Computer wins round ${round} by default!`);
            }

            scoresList.appendChild(newScore);
            currentScore.textContent = (`Human: ${humanScore}, Computer: ${computerScore}`);
            console.log(`Human: ${humanScore}, Computer: ${computerScore}`  );
            console.log("")
        
            if (humanScore === 5 || computerScore === 5) newGame();

            function newGame() {
                if (computerScore > humanScore) {
                    currentScore.textContent = (`Computer made it to five points first! Computer wins the game in ${round} rounds!`);
                } else {
                    currentScore.textContent = (`Human made it to five points first! Human wins the game in ${round} rounds!`)
                }
                round = 0;
                humanScore = 0;
                computerScore = 0;
                while (scoresList.firstChild) {
                    scoresList.removeChild(scoresList.firstChild);
                }
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