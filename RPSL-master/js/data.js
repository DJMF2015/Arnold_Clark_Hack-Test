
const computerPlay = function(){
  let hand = {
    0: "paper",
    1 : "rock",
    2 : "scissors",
    3 : "lizard",
    4 : "spock"
  };

  const randomIndex = Math.floor(Math.random() * 4);
  return hand[randomIndex];
}
