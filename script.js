console.log("Hello World!")

// function getComputerChoice randomly chooses between the strings "rock", "paper" or "scissors".

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function getHumanChoice uses a prompt method to allow the user to input their choice between "rock", "paper" or "scissors".

