let playerScore = 0;
let playerPCScore = 0;
let playButtons = document.querySelectorAll('.playButtons');
let resetButton = document.querySelector('#resetButton');
let winnerDisplayText = document.querySelector('#winnerDisplayText');

addEventResetButton();
addEventsPlayButtons();

function addEventsPlayButtons() {
	for (let i = 0; playButtons.length; i++) {
		playButtons[i].addEventListener('click', function() {
			winnerDisplayText.textContent = 
				getWinner(playButtons[i].innerHTML, computerPlayer());
			displayScores();
			if (playerScore === 5 || playerPCScore === 5) {
				announceWinner();
				disablePlayButtons();
				return;
			}
		});
	};
}

function disablePlayButtons() {
	for (let i = 0; playButtons.length; i++) {
		playButtons[i].disabled = true;
	}
}

function enablePlayButtons() {
	for (let i = 0; playButtons.length; i++) {
		playButtons[i].disabled = false;
	}
}

function announceWinner() {
	if (playerScore > playerPCScore) {
		winnerDisplayText.textContent = "You win!"
	} else {
		winnerDisplayText.textContent = "You lose!";
	};

}

function addEventResetButton() {
	resetButton.addEventListener('click', function() {
		playerScore = 0;
		playerPCScore = 0;
		winnerDisplayText.textContent = "";
		displayScores();
		enablePlayButtons();		
	});
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
			return "Paper beats rock.";
		} else {
			playerScore++;
			return "Rock beats scissors.";
		}
	} else if (player === "paper") {
		if (playerPC === "scissors") {
			playerPCScore++;
			return "Scissors beat paper.";
		} else {
			playerScore++;
			return "Paper beats rock.";
		}
	} else if (player === "scissors") {
		if (playerPC === "rock") {
			playerPCScore++;
			return "Rock beats scissors.";
		} else {
			playerScore++;
			return "Scissors beat paper.";
		}
	} else {
		return "something went wrong";
	}
}