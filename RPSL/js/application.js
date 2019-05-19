const game = document.querySelectorAll(".move-box input");
const roundText = document.querySelector("#round");
const playerSelectionText = document.querySelector("#player-selection");
const computerSelectionText = document.querySelector("#computer-selection");
const resultsText = document.querySelector("#results-container");
const playerScoreText = document.querySelector("#human-player .score-box");
const computerScoreText = document.querySelector("#pc-player .score-box");
const tiesText = document.querySelector("#ties-text .ties-score");
const finalscore = document.querySelector("#final-score");

let round = 0;
let ties = 0;
let computerPoints = 0;
let playerPoints = 0;

const computerPlay = function(){
  let hand = {
    0: "paper",
    1 : "rock",
    2 : "scissors",
    3 : "lizard",
    4 : "spock"
  };

  const randomIndex = Math.floor(Math.random() * 4);
  console.log(hand[randomIndex])
  return hand[randomIndex];
}

const playRound = function(playerSelection, computerSelection) {
  let result;
  round++;
  roundText.textContent = `round: ${round}`;

  playerSelectionText.textContent = `you selected ${playerSelection}`;

  if (playerSelection === computerSelection ){
    result = "tie";
    ties++;
  }  else if (playerSelection === "scissors" && computerSelection === "paper"){
    result = "win"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "win"
  } else if (playerSelection === "rock" && computerSelection === "lizard") {
    result = "win"
  } else if (playerSelection === "lizard" && computerSelection === "spock") {
    result = "win"
  } else if (playerSelection === "spock" && computerSelection === "scissors") {
    result = "win"
  } else if (playerSelection === "scissors" && computerSelection === "lizard") {
    result = "win"
  } else if (playerSelection === "lizard" && computerSelection === "paper") {
    result = "win"
  } else if (playerSelection === "paper" && computerSelection === "spock"){
    result = "win"
  } else if (playerSelection === "spock" && computerSelection === "rock") {
    result = "win"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "win"
  } else  {
    result = "lose";
  }

  if(result === "tie"){
    resultsText.textContent = `it's a tie!`;
    console.log(ties)
  }

  if(result === "win"){
    resultsText.textContent = `you win!, ${playerSelection} beats ${computerSelection}`;
    playerPoints++;
    playerScoreText.textContent = `${playerPoints} `;
  }

  if(result === "lose"){
    resultsText.textContent = `you lose!, ${computerSelection} beats ${playerSelection}`;
    computerPoints++;
    computerScoreText.textContent = `${computerPoints} `;
  }
  if(playerPoints == 5){
    finalscore.textContent = `Total Rounds: ${round}, Ties: ${ties} YOU WIN. Congratulations!`
    resetScore();
  }
  if(computerPoints == 5){
    finalscore.textContent = `Total Rounds: ${round}, Ties: ${ties} SORRY - YOU LOSE. Hard Luck`;
    resetScore();
  }

  function resetScore(){
    round = 0;
    ties = 0;
    computerPoints = 0;
    playerPoints = 0;
    // roundText.textContent = `round: ${round}`;
    // playerScoreText.textContent = `${playerPoints}`;
    computerScoreText.textContent = `${computerPoints}`;
    resultsText.textContent = ``;
    playerSelectionText.textContent = ``;
    computerSelectionText.textContent = ``;

  }



}
