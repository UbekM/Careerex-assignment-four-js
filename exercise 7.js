/** @format */

// EXCERCISE 7: GUESS THE NUMBER GAME
// Instruction
alert(
  "EXCERCISE 7\n\nLet's Play a Game!\n\nI have guessed a number between 1-5. You will Guess the number and I will tell you if you are right or wrong.\n\nI promise this will be fun. Let's Goooo!!!"
);

let Guess = prompt("Enter your guess");

let randNum = Math.floor(Math.random() * 5) + 1;

if (Guess === null) {
  alert("You cancelled");
} else if (Guess === "") {
  alert("Input cannot be empty");
} else if (isNaN(Guess)) {
  alert("Invalid input");
} else if (Guess > 5 || Guess < 1) {
  alert("Guess a Number Between 1-5");
} else {
  let guessNum = Number(Guess);
  if (guessNum === randNum) {
    alert("You guessed right!");
  } else {
    alert(`Wrong Guess\nThe answer was ${randNum}`);
  }
}
