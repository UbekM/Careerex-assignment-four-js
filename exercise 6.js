/** @format */

// EXCERCISE 6: GRADE CHECKER
// Instruction
alert("EXCERCISE 6\n\nThis is a Grade Checker.\nScore is from 0-100");

let Grade = prompt("Enter your score");

if (Grade === null) {
  alert("You cancelled");
} else if (Grade === "") {
  alert("Input cannot be empty");
} else if (isNaN(Grade)) {
  alert("Invalid input");
} else if (Grade > 100 || Grade < 0) {
  alert("Invalid input. Input between 0-100");
} else {
  let checkGrade = Number(Grade);
  if (checkGrade >= 70) {
    alert("Excellent");
  } else if (checkGrade >= 50) {
    alert("Good");
  } else alert("Needs Improvement");
}
