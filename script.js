function getComputerChoice() {
    let arr = ['Rock', 'paper', 'Scissor']
    return arr[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let input = prompt('Choose one: Rock, paper, or Scissors', 'Rock');
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("human: " + humanChoice);
    console.log("Computer: " + computerChoice);
    if(humanChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if(humanChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if(humanChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock') {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if(humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log("Draw!");
    } else {
        humanScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log("Your Score: " + humanScore);
console.log("Computer Score: " + computerScore);
