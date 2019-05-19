<script>
	var playerPoints = 0; var compPoints = 0; var ties = 0;
	var computerSelection;
	var playerSelection;
	function computerPlay(){
		var hand = ["rock" , "paper" , "scissors, izard, spock"];
		var randomIndex = Math.floor(Math.random() * 3);
		return hand[randomIndex];
	}
	function playerPlay(){
		playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();
		return playerSelection;
	}
	function playRound(playerSelection, computerSelection) {
		switch (playerSelection){
			case 'rock':
			if (computerSelection === 'scissors'){
				++playerPoints;
				return "<br>Great job! "+ "<br>" + "You beat the computer playing...<br>" + playerSelection ;
			}  else if (computerSelection === 'paper'){
				++compPoints;
				return "<br>computer wins playing  " + computerSelection;
			} else {
				++ties;
				return "<br>Draw  " ;
				break;
			}

			case 'scissors':
			if (computerSelection === 'paper'){
				++playerPoints;
				return "<br>Great job! "+ "<br>" + "You win playing <br>" + playerSelection ;
			} else if (computerSelection === 'rock'){
				++compPoints;
				return "<br>computer wins playing " + computerSelection ;
			} else {
				++ties;
				return "<br>Draw! " ;
				break;
			}
			case 'paper':
			if (computerSelection === 'rock'){
				++playerPoints;
				return "<br>Great job! "+ "<br>" + "You win playing <br>" + playerSelection ;
			} else if ( computerSelection === 'scissors'){
				++compPoints;
				return "<br>computer wins playing " + computerSelection;
			}else {
				++ties;
				return "<br>Draw!" ;
				break;
			} default:
			alert('Please enter rock, paper or scissors only! ');
		}
	}
	function checkScore(){
		if (playerPoints === compPoints){
			document.write("<br><h2> Draw! </h2>");
		}else if (playerPoints < compPoints ) {
			document.write("<br><h2> Computer wins!</h2>");
		}else if(playerPoints > compPoints ) {
			document.write("<br><h2> You win!</h2>");
		}  document.write("</br><b> Final Score:</b> " +" You  "+
		playerPoints+"<b> computer</b> " + compPoints +  " Ties: "+ ties);
	}

	function checkRound() {
		var roundIndex = 1;
		while(roundIndex <= 5)  {
			computerSelection = computerPlay();
			playerSelection = playerPlay();
			document.write(playRound(playerSelection, computerPlay()));
			document.write("<br> <b> You:</b> " + playerPoints+
			" <b> Computer </b> " + compPoints + " Ties: " + ties+ "<br>"+ " <br> <b> Round: <b>"+roundIndex);
			roundIndex++;
		}
	}
	checkRound();
	checkScore();
</script>
