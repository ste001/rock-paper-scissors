function computerPlay(){
	let randomPlay = Math.floor((Math.random() * 3) + 1);
  	return (randomPlay === 1) ? "rock" : (randomPlay === 2) ? "paper" : "scissors";
}
  		
function playRound(playerSelection, computerSelection){
	playerSelection.toLowerCase();
  	if ((playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")){
			console.log ("You win! " + playerSelection + " beats " + computerSelection);
			return 1;
	}
	else if (playerSelection === computerSelection){
		console.log ("It's a draw!");
		return 0;
	}
	else {
		console.log ("You lose! " + computerSelection + " beats " + playerSelection);
		return -1;
	}	
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
	button.addEventListener('click', (e) => {
		playRound(e.target.id, computerPlay());
	});
});
