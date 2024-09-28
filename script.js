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