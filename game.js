function computerPlay(){
	let randomPlay = Math.floor((Math.random() * 3) + 1);
  	return (randomPlay === 1) ? "rock" : (randomPlay === 2) ? "paper" : "scissors";
}
  		
function playRound(playerSelection, computerSelection){
	playerSelection.toLowerCase();
	let res = "";
  	if ((playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")){
			let res = "<p>You win! " + playerSelection + " beats " + computerSelection + "</p>";
			addResult(res);
			return 1;
	}
	else if (playerSelection === computerSelection){
		let res = "<p>It's a draw!</p>";
		addResult(res);
		return 0;
	}
	else {
		let res ="<p>You lose! " + computerSelection + " beats " + playerSelection + "</p>;
		addResult(res);
		return -1;
	}	
}

function addResult(result){
	const results = document.querySelector('#results');
	results.insertAdjacentHTML('afterbegin', result);
}

function updateScores (result, playerScore, computerScore){
	switch (result){
		case 1:
			playerScore++;
			break;
		case 0:
			break;
		case -1:
			computerScore++;
			break;
	}
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
	button.addEventListener('click', (e) => {
		playRound(e.target.id, computerPlay());
	});
});
