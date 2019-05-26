const game = document.querySelectorAll(".move-box input");
const roundText = document.querySelector("#round");
const playerSelectionText = document.querySelector("#player-selection");
const computerSelectionText = document.querySelector("#computer-selection");
const resultsText = document.querySelector("#results-container");
const playerScoreText = document.querySelector("#human-player .score-box");
const computerScoreText = document.querySelector("#pc-player .score-box");
const tiesText = document.querySelector("#ties-text .ties-score");
const finalscore = document.querySelector("#final-score");
const gamestats = document.querySelector("#gameStats-container")

let round = 0;
let ties = 0;
let computerPoints = 0;
let playerPoints = 0;

const playRound = function(playerSelection, computerSelection) {
  finalscore.textContent = ''
  let result;
  round++;
  roundText.textContent = `ROUND: ${round}`;

  if (playerSelection === computerSelection ){
    result = "tie";
    resultsText.textContent = `TIE`;
    ties++;
  }
  else if (playerSelection === computerSelection === "paper"
  || playerSelection === "paper" && computerSelection === "rock" ||
  playerSelection === "rock" && computerSelection === "lizard" ||
  playerSelection === "lizard" && computerSelection === "spock" ||
  playerSelection === "spock" && computerSelection === "scissors"||
  playerSelection === "scissors" && computerSelection === "lizard" ||
  playerSelection === "lizard" && computerSelection === "paper" ||
  playerSelection === "paper" && computerSelection === "spock" ||
  playerSelection === "spock" && computerSelection === "rock" ||
  playerSelection === "rock" && computerSelection === "scissors"){
    playerPoints++
    win()
  } else  {
    computerPoints++;
    lose()
  }

  function win(){
    if(playerPoints == 5){
      finalscore.textContent = `TOTAL ROUNDS: ${round} TIES: ${ties} YOU WIN!: ${playerPoints} COMPUTER: ${computerPoints} `
      finalscore.style.color="lightgreen ";
      resetScore();
    } else {
      resultsText.style.color="black ";
      resultsText.style.opacity = 2;
      gamestats.style.background="linear-gradient(white, #016c)";
      setTimeout(function(){gamestats.style.background ="";},1250);
      resultsText.textContent = `YOU: ${playerSelection} BEATS ${computerSelection}`;
      playerScoreText.textContent = `${playerPoints} `;
    }
  }

  function lose(){
    if(computerPoints == 5){
      finalscore.textContent = `TOTAL ROUNDS: ${round}, TIES: ${ties}
      YOU LOSE: PLAYER: ${playerPoints} COMPUTER: ${computerPoints}`;
      finalscore.style.color="red";
      resetScore();
    } else {
      resultsText.style.color="black";
      resultsText.style.opacity = -1;
      gamestats.style.background="linear-gradient(red, #016c)";
      setTimeout(function(){gamestats.style.background ="";},1250);
      resultsText.textContent = `Computer: ${computerSelection} BEATS ${playerSelection}`;
      computerScoreText.textContent = `${computerPoints} `;
    }
  }

  function resetScore(){
    round = 0;
    ties = 0;
    computerPoints = 0;
    playerPoints = 0;
    // roundText.textContent = `Rounds: ${round}`;
    // playerScoreText.textContent = `${playerPoints}`;
    // computerScoreText.textContent = `${computerPoints}`;
    resultsText.textContent = ``
    playerSelectionText.textContent = ``;
    computerSelectionText.textContent = ``;
  }

}
