document.addEventListener('DOMContentLoaded', () => {

  const game = document.querySelectorAll(".move-box input");
  game.forEach( move => move.addEventListener("click",event => {

    let playerSelection = event.target.name;

    event.target.style.background = 'linear-gradient(white,#012d)';
    setTimeout(()=>{ event.target.style.background ="";},1000);
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
  }));
});
