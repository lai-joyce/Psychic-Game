var letters = ["a", "b", "c"];
	var wins = 0;
	var losses = 0;
	var guesses_left = 8;
	var guesses_made = [];

	

	var computerPick = letters[Math.floor(Math.random()*letters.length)];

			console.log(computerPick);


	document.onkeyup = function(event) {

			var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
			
			console.log(playerGuess);

			for (var i=0; i<guesses_made.length; i++) {
				if (playerGuess === guesses_made[i]) {
				alert("You've already guessed that.");
				}
			}


			if (playerGuess === computerPick) {
				wins++;
				guesses_left = 8;
				guesses_made = [];
				alert("That's correct!");

			}

			if (playerGuess != computerPick) {
				guesses_left -=1;
				guesses_made.push(playerGuess);
				console.log(guesses_made);
			}

			if (guesses_left === 0) {
				alert("Incorrect.  You lose.  The letter was " + computerPick + ".");
				losses++;
				guesses_left = 8;
				guesses_made = [];
				;
			}




		var html ="<p>Guess what letter I'm thinking of!</p>" + 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guesses_left + "</p>" +
		"<p>Guesses Made: " + guesses_made + "</p>";

		document.querySelector("#game").innerHTML = html;
		}