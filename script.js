const btns = document.querySelectorAll('.selection button')
const resultDisplay = document.querySelector('.result')
const scoreLeft = document.querySelector('.score-left')
const scoreRight = document.querySelector('.score-right')
const tryAgain = document.querySelector('.restart button')

let score = [0, 0]

function initialiceGame() {
    resetDisplay()
    btns.forEach((btn) => {
        btn.addEventListener('click', handleButtonClicked)
    })
    tryAgain.hidden = true
    resultDisplay.textContent = "Let's Start"
}

function handleButtonClicked(event) {
    playRound(event.target.className, getComputerChoice())
}

tryAgain.addEventListener('click', initialiceGame)

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * 3)
    return choice[random]
}

function playRound(playerSelection, computerSelection) {
    let result = ''
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'Rock') {
                resultDisplay.textContent = 'Tie'
                result = 0
            }
            if (computerSelection === 'Paper') {
                resultDisplay.textContent = 'You loose! Paper beats Rock'
                result = -1
            }
            if (computerSelection === 'Scissors') {
                resultDisplay.textContent = 'You win! Rock beats Scissors'
                result = 1
            }
            break
        case 'paper':
            if (computerSelection === 'Rock') {
                resultDisplay.textContent = 'You win! Paper beats Rock'
                result = 1
            }
            if (computerSelection === 'Paper') {
                resultDisplay.textContent = 'Tie'
                result = 0
            }
            if (computerSelection === 'Scissors') {
                resultDisplay.textContent = 'You loose! Scissors beats Paper'
                result = -1
            }
            break
        case 'scissors':
            if (computerSelection === 'Rock') {
                resultDisplay.textContent = 'You loose! Rock beats Scissors'
                result = -1
            }
            if (computerSelection === 'Paper') {
                resultDisplay.textContent = 'You win! Scissors beats Paper'
                result = 1
            }
            if (computerSelection === 'Scissors') {
                resultDisplay.textContent = 'Tie'
                result = 0
            }
            break
        default:
            resultDisplay.textContent =
                'Wrong selection. You have to select Rock, Paper or Scissos'
            result = -1
    }

    updateScore(result)
    evaluateWinner()
}

function updateScore(winner) {
    switch (winner) {
        case 1:
            score[0] = score[0] + 1
            break
        case 0:
            break
        case -1:
            score[1] = score[1] + 1
            break
    }

    updateDisplay()
}

function updateDisplay() {
    scoreLeft.textContent = score[0]
    scoreRight.textContent = score[1]
}

function resetDisplay() {
    score[0] = 0
    score[1] = 0
    updateDisplay()
}

function finishGame() {
    tryAgain.hidden = false
    btns.forEach((btn) => {
        btn.removeEventListener('click', handleButtonClicked)
    })
}

function evaluateWinner() {
    if (score[0] === 5) {
        resultDisplay.textContent = 'Congrats! You win!!'
        finishGame()
    } else if (score[1] === 5) {
        resultDisplay.textContent = 'Sorry... You loose!!'
        finishGame()
    }
}

initialiceGame()
