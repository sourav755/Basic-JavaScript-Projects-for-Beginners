let randNumber = parseInt(Math.random() * 10);
console.log(randNumber);
const subtn = document.querySelector("#subtn");
const reset = document.querySelector("#rst");

const guessField = document.querySelector("#guessField");
const result = document.querySelector(".result");

let start = true;
let gameOver = false;

subtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (gameOver) {
    return;
  }

  const input = parseInt(guessField.value);
  displayPrevGuesses(input);

  totalchances--;
  displayRemainingGuesses(totalchances);

  if (totalchances <= 0) {
    endGame();
    result.innerHTML = `Game over. The correct number was ${randNumber}.`;
    reset.style.display = "block";
  } else {
    checkInput(input);
  }
});

let totalchances = 10;

let inputArray = [];

function checkInput(input) {
  if (input == randNumber) {
    result.innerHTML = `Congratulations! You guessed the correct number: ${randNumber}`;
    endGame();
  } else if (input > randNumber) {
    result.innerHTML = "Enter a lower number";
  } else {
    result.innerHTML = "Enter a greater number";
  }
}

function displayPrevGuesses(input) {
  inputArray.push(input);

  const prevguess = document.querySelector(".guesses");
  prevguess.innerHTML = inputArray;
}

function displayRemainingGuesses(totalchances) {
  const guessLeft = document.querySelector(".guessLeft");
  guessLeft.innerHTML = totalchances;
}

function endGame(result) {
  gameOver = true;
  subtn.disabled = true;
  guessField.disabled = true;
}

reset.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload(); // Refresh the page
});
