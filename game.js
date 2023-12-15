let player = 0;
let computer = 0;
let roundsPlayed = 0;
const roundResult = document.querySelector(".roundResult");
const scoreResult = document.querySelector(".score");

function getComputerChoice() {
    let randomIndex;
    let max = 3;
    let min = 0;
    randomIndex = Math.floor((Math.random() * (max - min) + min));
    let choices = ["rock", "paper", "scissor"];
    let output = choices[randomIndex];
    return output;
}

function playRound(playerChoice, computerChoice) {
    let playersChoice = playerChoice.toLowerCase()
    if (playersChoice == "rock") {
        switch(computerChoice) {
            case "rock":
                roundResult.textContent = "you tied";
                return "tie";
                break;
            case "scissor":
                roundResult.textContent = "you lost";
                return "you lose"
                break;
            case "paper":
                roundResult.textContent = "you won";
                return "you win";
                break;
            default:
                break;
        }
    } else if (playersChoice == "scissor") {
        switch(computerChoice) {
            case "rock":
                roundResult.textContent = "you lose";
                return "you lose";
                break;
            case "scissor":
                roundResult.textContent = "you tied";
                return "tie";
                break;
            case "paper":
                roundResult.textContent = "you won";
                return "you win";
                break;
        }
    } else {
        switch(computerChoice) {
            case "rock":
                roundResult.textContent = "you won";
                return "you win";
                break;
            case "scissor":
                roundResult.textContent = "you lose";
                return "you lose";
                break;
            case "paper":
                roundResult.textContent = "you tied";
                return "tie";
                break;
        }
    }
    }

let result;
let userChoice;
let computerChoice;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissors");
rockButton.addEventListener("click", () => {
    userChoice = "rock";
    computerChoice = getComputerChoice()
    result = playRound(userChoice,computerChoice)
    if (result == "you win") {
        player++;
    }
    scoreResult.textContent = `Your score is ${player}`
    roundsPlayed += 1 
});
paperButton.addEventListener("click", () => {
    userChoice = "paper"
    computerChoice = getComputerChoice()
    result = playRound(userChoice,computerChoice) 
    if (result == "you win") {
        player++;
    }
    scoreResult.textContent = `Your score is ${player}`
    roundsPlayed += 1
});
scissorButton.addEventListener("click", () => {
    userChoice = "scissor"
    computerChoice = getComputerChoice()
    result = playRound(userChoice,computerChoice)
    if (result == "you win") {
        player++;
    }
    scoreResult.textContent = `Your score is ${player}`
    roundsPlayed += 1
});





