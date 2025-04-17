/** @format */

// EXCERCISE 3: VOTING ELIGIBILITY CHECKER

// Instruction
alert("EXCERCISE 3\n\nThis is a Basic Voter Age Eligibility Checker\n");

let age = prompt("Input your age");

if (age === null) {
  alert("You cancelled");
} else if (age === "") {
  alert("Input cannot be empty");
} else if (isNaN(age)) {
  alert("Invalid input");
} else {
  let ageInput = Number(age);
  alert(ageInput >= 18 ? "Eligible" : "Not Eligible");
}
