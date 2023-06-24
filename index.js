function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

//UPDATE
// do zrobienia :
// Uporzdkowa to wszystko co tu jest, mniej tego kodu.
// zrobic dne ui.
const scores = document.querySelector("#scores")
const message = document.querySelector('#message')

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')


//let playerSelection = prompt("Paper or what?").toLowerCase()
let playerSelection;
let computerScore = 0
let playerScore = 0

const btns = [rockBtn,paperBtn,scissorsBtn]
rockBtn.addEventListener('click', function(){
    playerSelection = "rock"
    let computerSelection = getComputerChoice()
    message.textContent = playRound(computerSelection , playerSelection)
    scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
    if(playerScore >= 5){
        message.textContent = "Player Wins!"
    } else if (computerScore >= 5) {
        message.textContent = "Computer Wins!"
    }
})
paperBtn.addEventListener('click', function(){
    playerSelection = "paper"
    let computerSelection = getComputerChoice()
    message.textContent = playRound(computerSelection , playerSelection)
    scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
    if(playerScore >= 5){
        message.textContent = "Player Wins!"
    } else if (computerScore >= 5) {
        message.textContent = "Computer Wins!"
    }
})
scissorsBtn.addEventListener('click', function(){
    playerSelection = "scissors"
    let computerSelection = getComputerChoice()
    message.textContent = playRound(computerSelection , playerSelection)
    scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
    if(playerScore >= 5){
        message.textContent = "Player Wins!"
    } else if (computerScore >= 5) {
        message.textContent = "Computer Wins!"
    }

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



//playRound(computerSelection, playerSelection)
//scores.innerHTML = `
//    Computer: ${computerScore} Player: ${playerScore}
//` 