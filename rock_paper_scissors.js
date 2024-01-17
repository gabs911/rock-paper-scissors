let playerScore = 0;
let computerScore = 0;

game();

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
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    else if((computerSelection == "Scissors") && (playerSelection == "Paper"))
    {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if((computerSelection == "Paper") && (playerSelection == "Rock"))
    {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else if((playerSelection == "Scissors") && (computerSelection == "Paper"))
    {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if((playerSelection == "Paper") && (computerSelection == "Rock"))
    {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if((playerSelection == "Rock") && (computerSelection == "Scissors"))
    {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else if((playerSelection) == (computerSelection))
    {
        console.log("Tie");
        playRound(prompt("Your choice:"),getComputerChoice());
    }
}


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