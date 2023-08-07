
const game = {
    DOM : {
        scores: document.querySelector("#scores"),
        message: document.querySelector('#message'),
        rockBtn: document.querySelector('#rock'),
        paperBtn: document.querySelector('#paper'),
        scissorsBtn: document.querySelector('#scissors'),
        btns : [rockBtn, paperBtn, scissorsBtn]
    },
    playerSelection,
    computerScore : 0,
    playerScore : 0,

    getComputerChoice() {
        choices = ["rock", "paper", "scissors"]
        let randomNum = Math.floor(Math.random() * 3)
        return choices[randomNum]
    },
    playRound(computerSelection, playerSelection) {

    if (computerSelection === "rock" && playerSelection === "paper") {
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
}


// Handling user inputs, but its very, verylong and nasty
//it will be better if it was a function inside a game with two parameters and also
//extraction of this funtions here to simply btn => game.chose(paper)


const logic = playerSelection => {
    const [message, scores] = game.DOM
    const [playerScore, computerScore] = game
    let computerSelection = getComputerChoice()
    message.textContent = playRound(computerSelection, playerSelection)
    scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
    if (playerScore >= 5) {
        message.textContent = "Player Wins!"
    } else if (computerScore >= 5) {
        message.textContent = "Computer Wins!"
    }
}

rockBtn.addEventListener('click', function () {
    logic('rock')
})
paperBtn.addEventListener('click', function () {
    logic('paper')
})
scissorsBtn.addEventListener('click', function () {
    logic('scissors')
})
