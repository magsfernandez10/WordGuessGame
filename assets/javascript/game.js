var words = ["Home", "Marge", "Bar", "Lisa", "Maggie", "Krust", "Moe", "Apu", "Milhouse", "Moe", "MrBurns", "Ned", "Waylon"];
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentWord = "";
var letters = [];
var currentPuzzle = [];
var incorrect = [];

var guess = "";
var wins = 0;
var numGuesses = 10;
var guessedChoices = [];
var userGuess;



start();
document.onkeypress = function (event) {
    console.log(currentWord);
    guess = event.key;
    checkGuess();
    rounds();
};

var generateWord = function () {
    currentWord = words[Math.floor(Math.random() * words.length)];
    letters = currentWord.split("");
}

var start = function () {
    reset();
    generateWord();

    for (var i = 0; i < letters.length; i++) {

    if (alphabetLetters.indexOf(letters[i]) > -1) {
        currentPuzzle.push("__ ")
} else {
         currentPuzzle.push(letters[i]);
}

}
 displayToBrowser();
}

var checkGuess = function () {
var correctGuess = false;
for (var i = 0; i < currentWord.length; i++) {
if (currentWord[i] === guess) {
correctGuess = true;
}
}
if (correctGuess) {
    for (var j = 0; j < currentWord.length; j++) {
    if (currentWord[j] === guess) {
        currentPuzzle[j] = guess;
        document.getElementById("word").innerHTML = currentPuzzle.join(" ");
    }
    }
        } else if (!incorrect.includes(guess) && (alphabetLetters.indexOf(guess) > -1)) {
            incorrect.push(guess);
            // Decrease guessesRemaining by 1
            guessesRemaining--;
        }

    }



    var rounds = function () {

        displayToBrowser();

        if (currentPuzzle.join("") === currentWord) {
            // Add 1 to win score
            wins++;
            // Update score
            document.getElementById("wins").innerHTML = wins;
            // Play music & display cover
            play();
        } else if (guessesRemaining === 0) {
            // Restart game
            start();
        }

    }

    var displayToBrowser = function () {
        document.getElementById("word").innerHTML = currentPuzzle.join(" ");
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guesses").innerHTML = guessesRemaining;
        document.getElementById("letters").innerHTML = incorrect;
    }

    var reset = function () {
        currentPuzzle = [];
        incorrect = [];
        guessesRemaining = 10;
    };
