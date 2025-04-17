/** @format */

//EXCERCISE 1: EVEN OR ODD CHECKER

let userInput = prompt(
    "EXCERCISE 1\n\nLet play a game \n \nInput any number of your choice and I will tell you if your number is even or odd\n"
  );
  
  // Error Checks
  if (userInput === null) {
    alert("You cancelled");
  } else if (userInput.trim() === "") {
    alert("Input cannot be empty");
  } else if (isNaN(userInput)) {
    alert("Invalid input");
  } else {
    // Check for even or odd
    let number = Number(userInput);
    let result;
    number % 2 === 0
      ? (result = `Voila! Your Input ${number} is Even 😊`)
      : (result = `Oops! Your Input ${number} is Odd 😔`);
  
    alert(result);
  }
    