
let playerScore = 0;
let computerScore = 0;
const MAX_WINS = 5;
const buttons = document.querySelectorAll('button');

initEventListeners();

function initEventListeners(){
	buttons.forEach((button)=>{
		button.addEventListener('click', updateResults);
	});
}

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
		let res ="<p>You lose! " + computerSelection + " beats " + playerSelection + "</p>";
		addResult(res);
		return -1;
	}	
}

function addResult(result){
	const results = document.querySelector('#results');
	results.insertAdjacentHTML('afterbegin', result);
}

function updateResults(e){
	let roundResult = playRound(e.target.id, computerPlay());
	switch (roundResult){
		case 1:
			playerScore++;
			const ps = document.getElementById('player-score');
			ps.textContent = playerScore;
			break;
		case 0:
			break;
		case -1:
			computerScore++;
			const cs = document.getElementById('computer-score');
			cs.textContent = computerScore;
			break;
		default:
			break;
	}
	if (playerScore >= MAX_WINS){
		const msg = "<p style='color:green;'>You win the game!</p>";
		addResult(msg);
		endGame();
	}
	
	if (computerScore >= MAX_WINS){
		const msg = "<p style='color:red;'>You lose the game!</p>";
		addResult(msg);
		endGame();
	}
}

function endGame(){
	buttons.forEach((button)=>{
		button.removeEventListener('click', updateResults);
		console.log("Removed");
	});
}
