// randomly return rock, paper, or scissors
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

function playerPlay() {

}

//round of play
function playRound(playerSelection, computerSelection) {

    console.log("Computer choice is: " + computerSelection);
    console.log("Player choise is: " + playerSelection);


    if(playerSelection == computerSelection) {
        console.log("Tie!");
    } else if(playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("Computer wins!");
    } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("Player wins!");
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("Player wins!");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("Computer wins!");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("Computer wins!");
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("Player wins!");
    }
}

let computerSelection = computerPlay();
let playerSelection = "rock";
playRound(playerSelection, computerPlay());