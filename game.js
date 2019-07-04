function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        return "rock";
    }
    else if (compChoice == 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        document.getElementById('resultsText').innerHTML = `It's a tie! You both chose ${playerSelection}`;
        return 0;
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        document.getElementById('resultsText').innerHTML = "You lose. Paper beats Rock";
        return 2;
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        document.getElementById('resultsText').innerHTML = "You win. Rock beats Scissor";
        return 1;
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        document.getElementById('resultsText').innerHTML = "You win. Paper beats rock";
        return 1;
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        document.getElementById('resultsText').innerHTML = "You lose. Scissors beats paper";
        return 2;
    }

    if (playerSelection == "scissor" && computerSelection == "paper") {
        document.getElementById('resultsText').innerHTML = "You win. Scissors beats paper";
        return 1;
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        document.getElementById('resultsText').innerHTML = "You lose. Rock beats scissors";
        return 2;
    }
}

function game(userInput) {

    let playerWinNum = parseInt(document.getElementById('playerScore').innerHTML);
    let compWinNum = parseInt(document.getElementById('compScore').innerHTML);
    let results;

    results = playRound(userInput, computerPlay());

    if (results == 1) {
        playerWinNum++;
    }
    else if (results == 2) {
        compWinNum++;
    }

    document.getElementById('playerScore').innerHTML = playerWinNum.toString(10);
    document.getElementById('compScore').innerHTML = compWinNum.toString(10);

    numGamesPlayed++;

    if ((playerWinNum > compWinNum) && (numGamesPlayed == 5)){
        document.getElementById("resultsText").innerHTML = "You win!";
        maxGamesPlayed();
    }
    else if((playerWinNum < compWinNum) && (numGamesPlayed == 5)){
        document.getElementById("resultsText").innerHTML = "You lose.";
        maxGamesPlayed();
    }
    else if((playerWinNum == compWinNum) && (numGamesPlayed == 5)){
        document.getElementById("resultsText").innerHTML = "It's a tie!";
        maxGamesPlayed();
    }
}

function showGameContent() {
    document.getElementById('gameStart').style.display = "none";
    document.getElementById('gameControls').style.visibility = "visible";
    document.getElementById('scoreboard').style.visibility = "visible";
}

function maxGamesPlayed(){
    document.getElementById("gameControls").style.visibility="hidden";
    document.getElementById("playAgain").style.visibility="visible";
}

function resetGame(){
    document.getElementById("playAgain").style.visibility="hidden";
    document.getElementById('playerScore').innerHTML = 0;
    document.getElementById('compScore').innerHTML = 0;
    document.getElementById("gameControls").style.visibility="visible";
    document.getElementById('resultsText').innerHTML = "";
    numGamesPlayed = 0;
}

var numGamesPlayed = 0;
document.getElementById('gameStart').addEventListener("click", showGameContent);

document.getElementById('rock').addEventListener("click", function(){ game("rock");});
document.getElementById('paper').addEventListener("click", function(){ game("paper");});
document.getElementById('scissor').addEventListener("click", function(){ game("scissor");});

document.getElementById("playAgain").addEventListener("click", resetGame);