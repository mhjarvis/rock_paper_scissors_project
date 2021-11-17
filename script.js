console.log("Hello");

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

//round of play
function playRound() {

    console.log("Computer choice is: " + computerChoice);
    let playerChoice = 'rock';
    //let playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice == computerChoice) {
        console.log("Tie!");
    } else if(playerChoice == 'rock' && computerChoice == 'paper') {
        console.log("Computer wins!");
    } else if(playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log("Player wins!");
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log("Player wins!");
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log("Computer wins!");
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log("Computer wins!");
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log("Player wins!");
    }
}

let computerChoice = computerPlay();
playRound();