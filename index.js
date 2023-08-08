const game = {
    DOM: {
        scores: document.querySelector("#scores"),
        message: document.querySelector("#message"),
        rockBtn: document.querySelector("#rock"),
        paperBtn: document.querySelector("#paper"),
        scissorsBtn: document.querySelector("#scissors"),
        btnContainer : document.querySelector('.button-container'),
        reset : document.querySelector('#reset')
    },
    playerScore: 0,
    computerScore: 0,
    choices: ["rock", "paper", "scissors"],

    getComputerChoice() {
        const randomNum = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomNum];
    },
    playRound(computerSelection, playerSelection) {
        if (computerSelection === playerSelection) {
            return "It's a tie!";
        } else if (
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors") ||
            (computerSelection === "scissors" && playerSelection === "rock")
        ) {
            this.playerScore++;
            return `You win, ${playerSelection} beats ${computerSelection}!`;
        } else {
            this.computerScore++;
            return `You lose, ${computerSelection} beats ${playerSelection}!`;
        }
    },
    logic(playerSelection) {
        const { message, scores, btnContainer } = this.DOM;
        const computerSelection = this.getComputerChoice();
        message.textContent = this.playRound(computerSelection, playerSelection);
        scores.textContent = `Player score: ${this.playerScore} Computer score: ${this.computerScore}`;
        if (this.playerScore >= 5) {
            message.textContent = "Player Wins!";
            message.style.fontSize = '30px'
            btnContainer.style.display = 'none'

        } else if (this.computerScore >= 5) {
            message.textContent = "Computer Wins!";
            message.style.fontSize = '30px'
            btnContainer.style.display = 'none'
        }
    },
    reset(){
        const {message, btnContainer, scores} = this.DOM
        btnContainer.style.display = 'block'
        message.textContent = ''
        message.style.fontSize = '16px'
        scores.textContent = ''
        this.computerScore = 0
        this.playerScore = 0

    },
    init() {
        const { rockBtn, paperBtn, scissorsBtn, reset } = this.DOM;
        this.DOM.btns = [rockBtn, paperBtn, scissorsBtn, reset];
        this.DOM.btns.forEach(btn => {
            btn.addEventListener("click", () => btn.id === 'reset' ? this.reset(): this.logic(btn.id));
        });
    }
};

game.init();
