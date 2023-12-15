let player = 0;
let computer = 0;

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
                console.log("tied round");
                return "tie";
                break;
            case "scissor":
                console.log("you lose");
                return "you lose"
                break;
            case "paper":
                console.log("you win");
                return "you win";
                break;
            default:
                break;
        }
    } else if (playersChoice == "scissor") {
        switch(computerChoice) {
            case "rock":
                console.log("you lose");
                return "you lose";
                break;
            case "scissor":
                console.log("tied round");
                return "tie";
                break;
            case "paper":
                console.log("you win");
                return "you win";
                break;
        }
    } else {
        switch(computerChoice) {
            case "rock":
                console.log("you win");
                return "you win";
                break;
            case "scissor":
                console.log("you lose");
                return "you lose";
                break;
            case "paper":
                console.log("tied round");
                return "tie";
                break;
        }
    }
    }

    function game() {
        let result;
        let userChoice;
        let computerChoice;
        for (let i = 1; i <= 5; i++) {
            computerChoice = getComputerChoice()
            userChoice = prompt("Please enter your choice:");
            result = playRound(userChoice,computerChoice)
            if (result == "you lose") {
                computer = computer + 1
            } else if (result == "you win") {
                player = player + 1
            }
        }
        if (player > computer) {
            console.log("You win the game")
        } else if (player < computer) {
            console.log("You lost the game")
        } else {
            console.log("This game is tied after 5 rounds")
        }
    }

game();

