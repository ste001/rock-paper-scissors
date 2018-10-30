 //game();
  		function computerPlay(){
  			let randomPlay = Math.floor((Math.random() * 3) + 1);
  			return (randomPlay === 1) ? "rock" : (randomPlay === 2) ? "paper" : "scissors";
  		}
  		
  		function playRound(playerSelection, computerSelection){
				playerSelection.toLowerCase();
  			if ((playerSelection === "rock" && computerSelection === "scissors") ||
					(playerSelection === "paper" && computerSelection === "rock") ||
					(playerSelection === "scissors" && computerSelection === "paper")){
						alert ("You win! " + playerSelection + " beats " + computerSelection);
						return 1;
					}
				else if (playerSelection === computerSelection){
						alert ("It's a draw!");
						return 0;
				}
				else {
						alert ("You lose! " + computerSelection + " beats " + playerSelection);
						return -1;
				}	
  		}
		
		/*function game(){
			const MAX_WINS = 3;
			let playerScore = 0;
			let computerScore = 0;
			while (playerScore < MAX_WINS && computerScore < MAX_WINS ){
				let playerSelection = prompt("Enter your move");
				let computerSelection = computerPlay();
				let result = playRound(playerSelection, computerSelection);
				switch (result){
					case 1:
						playerScore++;
						alert("Player score: " + playerScore);
						break;
					case 0:
						alert ("No change");
						break;
					case -1:
						computerScore++;
						alert("Computer score: " + computerScore);
						break;
					}
				}
				if (playerScore === MAX_WINS)
					alert ("You win the game!");
				else
					alert ("You lose the game!");
			}*/
