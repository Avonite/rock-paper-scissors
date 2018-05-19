let playerScore = 0;
let playerPCScore = 0;

game();

function game() {
	for(i = 0; i < 5; i++) {
		let player = prompt("Choose rock, paper or scissors.").toLowerCase();
		let playerPC = computerPlayer();
		console.log(getWinner(player, playerPC));
		console.log("Score: You: " + playerScore + " - Computer: " + playerPCScore);
	}
}

function computerPlayer() {
	let playerValues = ["rock", "paper", "scissors"];
	let randomNumber = Math.floor(Math.random()*3);
	return playerValues[randomNumber];
}

function getWinner(player, playerPC) {
	if(player === playerPC) {
		return "It's a draw!";
	} else if (player === "rock") {
		if (playerPC === "paper") {
			playerPCScore++;
			return "Computer wins.";
		} else {
			playerScore++;
			return "You win!";
		}
	} else if (player === "paper") {
		if (playerPC === "scissors") {
			playerPCScore++;
			return "Computer wins.";
		} else {
			playerScore++;
			return "You win!";
		}
	} else if (player === "scissors") {
		if (playerPC === "rock") {
			playerPCScore++;
			return "Computer wins.";
		} else {
			playerScore++;
			return "You win!";
		}
	} else {
		return "something went wrong";
	}
}