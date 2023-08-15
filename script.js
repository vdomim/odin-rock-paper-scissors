function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * 3)
    return choice[random]
}

console.log(getComputerChoice())
