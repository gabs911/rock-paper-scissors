let playerScore = 0;
let computerScore = 0;

//Get result text div

const result = document.querySelector(".result-text");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");


function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    
    if(choice === 0)
    {
        return "Rock";
    }
    else if(choice === 1)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    console.log(computerSelection);
    if((computerSelection == "Rock") && (playerSelection =="Scissors"))
    {
        computerScoreDiv.textContent = "Computer Score: " + String(computerScore++);
        result.textContent = "You Lose! Rock beats Scissors";
    }
    else if((computerSelection == "Scissors") && (playerSelection == "Paper"))
    {
        computerScoreDiv.textContent = "Computer Score: " + String(computerScore++);
        result.textContent =  "You Lose! Scissors beats Paper";
    }
    else if((computerSelection == "Paper") && (playerSelection == "Rock"))
    {
        computerScoreDiv.textContent = "Computer Score: " + String(computerScore++);
        result.textContent =  "You Lose! Paper beats Rock";
    }
    else if((playerSelection == "Scissors") && (computerSelection == "Paper"))
    {
        playerScoreDiv.textContent = "Player Score: " + String(playerScore++);
        result.textContent =  "You Win! Scissors beats Paper";
    }
    else if((playerSelection == "Paper") && (computerSelection == "Rock"))
    {
        playerScoreDiv.textContent = "Player Score: " + String(playerScore++);
        result.textContent =  "You Win! Paper beats Rock";
    }
    else if((playerSelection == "Rock") && (computerSelection == "Scissors"))
    {
        playerScoreDiv.textContent = "Player Score: " + String(playerScore++);
        result.textContent =  "You Win! Rock beats Scissors";
    }
    else if((playerSelection) == (computerSelection))
    {
        result.textContent = "It's a tie!";
    }
}

//Buttons for the choices///////
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.addEventListener('click', () => {
    console.log(playRound("Rock", getComputerChoice()));
});

paperButton.addEventListener('click', () => {
    console.log(playRound("Paper", getComputerChoice()));
});

scissorsButton.addEventListener('click', () => {
    console.log(playRound("Scissors", getComputerChoice()));
});

///////////////////////////////



/*
function game()
{
    for (let step = 0; step < 5; step++) {
        console.log(playRound(prompt("Your choice:"),getComputerChoice()));
    }

    if(playerScore > computerScore)
    {
        console.log("You win!!!");
    }
    else
    {
        console.log("You lose....");
    }
}
*/