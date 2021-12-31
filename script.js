// randomly return rock, paper, or scissors for Computer
function computerPlay() {

    let randomNum = Math.floor(Math.random() * 9);

    if(randomNum >= 0 && randomNum <= 2) {
        return "rock";
    } else if(randomNum >= 3 && randomNum <=5) {
        return "paper";
    } else {
        return "scissors";
    }
}

// prompt player input and test for spelling/game requirements
function getPlayerInput() {

    let choice = prompt("Please enter 'rock', 'paper' or 'scissor': ");
    choice = choice.toLowerCase();

    while(choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        choice = prompt("Please ONLY enter 'rock', 'paper' or 'scissor': ");
        choice = choice.toLowerCase();
    }

    return choice;
}

// complete one round of play and return result
function playRound(playerSelection, computerSelection) {

    console.log("Computer choice is: " + computerSelection);
    console.log("Player choise is: " + playerSelection);

    if(playerSelection == computerSelection) {
        return "Tie!";
    } else if(playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose! Paper beats Rock";
    } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Loose! Scissors beats paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win! Scissors beats Paper";
    }
}

// play game over five rounds and display final score
function game() {

    let count = 5;
    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < count; i++) {

        console.log("ROUND: " + (i + 1));
        let round = playRound(getPlayerInput(), computerPlay());
        console.log(round);

        if(round == "Tie") {
            continue;
        }

        if(round == "You Lose! Paper beats Rock" || round == "You Loose! Scissors beats paper" || round == "You Loose! Rock beats Scissors") {
            computerScore += 1;
        }

        if(round == "You Win! Rock beats Scissors" || round == "You Win! Paper beats Rock" || round == "You Win! Scissors beats Paper") {
            playerScore += 1;
        }
    }

    console.log("Player: " + playerScore + "    Computer: " + computerScore);
}

// run program4
game();
