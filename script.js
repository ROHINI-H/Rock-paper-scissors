function getComputerChoice() {
    let arr = ['Rock', 'paper', 'Scissor']
    return arr[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());