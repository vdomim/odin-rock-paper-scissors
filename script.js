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
                console.log('Tie')
                result = 0
            }
            if (computerSelection === 'Paper') {
                console.log('You loose! Paper beats Rock')
                result = -1
            }
            if (computerSelection === 'Scissors') {
                console.log('You win! Rock beats Scissors')
                result = 1
            }
            break
        case 'paper':
            if (computerSelection === 'Rock') {
                console.log('You win! Paper beats Rock')
                result = 1
            }
            if (computerSelection === 'Paper') {
                console.log('Tie')
                result = 0
            }
            if (computerSelection === 'Scissors') {
                console.log('You loose! Scissors beats Paper')
                result = -1
            }
            break
        case 'scissors':
            if (computerSelection === 'Rock') {
                console.log('You loose! Rock beats Scissors')
                result = -1
            }
            if (computerSelection === 'Paper') {
                console.log('You win! Scissors beats Paper')
                result = 1
            }
            if (computerSelection === 'Scissors') {
                console.log('Tie')
                result = 0
            }
            break
        default:
            console.log(
                'Wrong selection. You have to select Rock, Paper or Scissos'
            )
            result = -1
    }

    return result
}

function updateScore(score, winner) {
    switch (winner) {
        case 1:
            score[0] = score[0] + 1
            return score
        case 0:
            return score
        case -1:
            score[1] = score[1] + 1
            return score
    }
}

function evaluateWinner(score) {
    if (score[0] > score[1]) console.log('Congrats! You win!!')
    else if (score[0] < score[1]) console.log('Sorry... You loose')
    else console.log("It's a Tie")
}

function game() {
    let score = [0, 0]
    console.log("Lets's start the Game!!")
    for (let i = 0; i < 5; i++) {
        console.log('--------------------------------')
        console.log('Round nº ' + (i + 1) + '!!')
        const playerSelection = prompt('Select Rock, Paper or Scissors')
        console.log('playerSelection:', playerSelection)
        const computerSelection = getComputerChoice()
        console.log('computerSelection:', computerSelection)
        const winner = playRound(
            playerSelection.toLowerCase(),
            computerSelection
        )

        score = updateScore(score, winner)
        console.log('The actual score is: ', score.toString())
    }

    console.log('--------------------------------')
    evaluateWinner(score)
}

game()
