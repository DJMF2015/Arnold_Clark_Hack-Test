document.addEventListener('DOMContentLoaded', () => {

  const game = document.querySelectorAll(".move-box input");
  game.forEach( move => move.addEventListener("click",event => {

    let playerSelection = event.target.name;

    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
  }));
});
