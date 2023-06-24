function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

//UPDATE

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

const computerSelection = getComputerChoice()
//let playerSelection = prompt("Paper or what?").toLowerCase()
let playerSelection;
let computerScore = 0
let playerScore = 0

const btns = [rockBtn,paperBtn,scissorsBtn]
rockBtn.addEventListener('click', function(){
    playerSelection = "rock"
    console.log(playerSelection)
})
paperBtn.addEventListener('click', function(){
    playerSelection = "paper"
    console.log(playerSelection)
})
scissorsBtn.addEventListener('click', function(){
    playerSelection = "scissors"
    console.log(playerSelection)
})


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
/*document.body.innerHTML = `
    Computer: ${computerScore} Player: ${playerScore}
` */