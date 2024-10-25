function getComputerChoice() {
    let arr = ['Rock', 'paper', 'Scissor']
    return arr[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let input = prompt('Choose one of number: Rock(1), paper(2), or Scissors(3)', 0);
    if(input <= 3 && input >= 1) {
        return input;
    } else {
        alert('Enter the valid input');
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;