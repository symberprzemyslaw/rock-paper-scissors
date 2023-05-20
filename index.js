function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

const computerSelection = getComputerChoice()
let playerSelection = prompt("Paper or what?").toLowerCase()
let computerScore = 0
let playerScore = 0


function playRound(computerSelection, playerSelection){
    if (computerSelection === "rock" && playerSelection ==="paper") {
        playerScore++
        return "You win! Paper beats rock!"
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        return "You win! Scissors beats paper!"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++
        return "You win! rock beats scissors"
    } else if (computerSelection === playerSelection) {
        return "Its a tie!"
    } else {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}
playRound()
document.body.innerHTML = `
    Computer: ${computerScore} Player: ${playerScore}
`