// Generate the random number to be guessed
var theNumber = Math.floor(Math.random() * 100) + 1;

// Set the number of guesses the user gets
const INITIAL_GUESSES = 10;
var guesses = INITIAL_GUESSES;

function check() {
  var guess = document.getElementById("input").value;

  // Check if the user is out of guesses
  if (guesses > 0) {

    // Decrease the number of remaining guesses
    guesses--;

    // Check if the user guessed the correct number
    if (guess == theNumber) {
        document.getElementById("input").value = "";
        document.getElementById("message").innerHTML = "Congratulations! You "
                                                       + "guessed that my "
                                                       + "number was "
                                                       + theNumber + " in "
                                                       + (INITIAL_GUESSES - guesses)
                                                       + " guesses";
      } else if (guess > theNumber) {
        document.getElementById("message").innerHTML = "Too high... try again";
      } else {
        document.getElementById("message").innerHTML = "Too low.. try again";
      }
  } else {
    document.getElementById("message").innerHTML = "Sorry, out of guesses! "
                                                  + "My number was " + theNumber
                                                 + ". Better luck next time!";
  }

  // Update number of guesses message
  document.getElementById("guesses").innerHTML = "Remaining guesses: " + guesses;
}

function restart() {
  guesses = INITIAL_GUESSES;
  theNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("input").value = "";
  document.getElementById("message").innerHTML = "Ready? Guess!";
  document.getElementById("guesses").innerHTML = "";
}
