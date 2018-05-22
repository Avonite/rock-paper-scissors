let playerScore = 0;
let playerPCScore = 0;
let playButtons = document.querySelectorAll('.playButtons');
let resetButton = document.querySelector('#resetButton');

addClickEventsPlayButtons();

resetButton.addEventListener('click', function() {
	playerScore = 0;
	playerPCScore = 0;
	displayScores();
});


function addClickEventsPlayButtons() {
	for (let i = 0; playButtons.length; i++) {
		playButtons[i].addEventListener('click', function() {
			getWinner(playButtons[i].innerHTML, computerPlayer());
			displayScores();
		});
	};
}

function displayScores() {
	document.getElementById('playerScoreDisplay').textContent = playerScore;
	document.getElementById('computerScoreDisplay').textContent = playerPCScore;
}

function computerPlayer() {
	let playerValues = ["rock", "paper", "scissors"];
	let randomNumber = Math.floor(Math.random()*3);
	return playerValues[randomNumber];
}

function getWinner(player, playerPC) {
	if (player === playerPC) {
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


// function checkUserInput(player){
// 	switch (player) {
// 		case "rock" :
// 		case "paper" :
// 		case "scissors":
// 			return true;
// 		default: 
// 			return false;
// 	}
// }


// function playRound(e) {
// 	let scoreDisplay = document.querySelector('#playerScore');
// 	scoreDisplay.textContent("test");
// }

// game();

// function game() {
// 	for(i = 0; i < 5; i++) {
// 		let player = prompt("Choose rock, paper or scissors.").toLowerCase();
// 		while (!checkUserInput(player)) {
// 			alert("That was incorrect.");
// 			player = prompt("Choose rock, paper or scissors.").toLowerCase();
// 		}
// 		let playerPC = computerPlayer();
// 		console.log(getWinner(player, playerPC));
// 		console.log("Score: You: " + playerScore + " - Computer: " + playerPCScore);
// 	}
// }