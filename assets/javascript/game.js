var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
var wins = 0;
var losses = 0;
var MAX_GUESSES = 8;
var guesses_left = MAX_GUESSES;
var guesses_made = [];

var computerPick;

function computerThinks() {
    computerPick = letters[Math.floor(Math.random() * letters.length)];
}

computerThinks(); // initial computer pick

console.log(computerPick);

function updateGameUI() {
    var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Possible Letters: " + letters + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses_left + "</p>" +
        "<p>Guesses Made: " + guesses_made + "</p>";

    document.querySelector("#game").innerHTML = html;
}

function resetGame() {
    guesses_left = MAX_GUESSES;
    guesses_made = [];
    computerThinks(); // computer picks a new letter
}

document.onkeyup = function (event) {

    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(playerGuess);

    for (var i = 0; i < guesses_made.length; i++) {
        if (playerGuess === guesses_made[i]) {
            alert("You've already guessed that.");
        }
    }


    if (playerGuess === computerPick) {
        wins++;
        alert("That's correct!  The correct letter was \"" + computerPick + "\".  It only took you " + (MAX_GUESSES - guesses_left + 1) + " tries.");
        resetGame();
    }
    else {
        guesses_left -= 1;
        guesses_made.push(playerGuess);
        console.log(guesses_made);
    }

    if (guesses_left === 0) {
        alert("Incorrect.  You lose.  The letter was \"" + computerPick + "\"");
        losses++;
        resetGame();
    }

    
    updateGameUI();
    
}