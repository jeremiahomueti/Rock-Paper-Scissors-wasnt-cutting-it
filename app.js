const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}) ) 

function generateComputerChoice() {

    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1


    if (randomNumber === 1) {computerChoice = 'Rock'}
    if (randomNumber === 2) {computerChoice = 'Paper'}
    if (randomNumber === 3) {computerChoice = 'Scissors'}
    
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() 
{
    if (computerChoice === userChoice)
    {
        result = "It's  a draw!"
    }

    if (computerChoice === 'rock' && userChoice === 'paper')
    {
        result = "You Win!"
    }

    if (computerChoice === 'rock' && userChoice === 'scissors')
    {
        result = "Oops! You Lose!"
    }

    if (computerChoice === 'paper' && userChoice === 'scissors')
    {
        result = "You Win!"
    }
    
    if (computerChoice === 'paper' && userChoice === 'rock')
    {
        result = "Oops! You Lose!"
    }
    
    if (computerChoice === 'scissors' && userChoice === 'rock')
    {
        result = "You Win!"
    }

    if (computerChoice === 'scissors' && userChoice === 'paper')
    {
        result = "Oops! You Lose!"
    }
    
    resultDisplay.innerHTML = result

}