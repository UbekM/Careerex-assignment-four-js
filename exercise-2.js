/** @format */

// EXCERCISE 2: BASIC CALCULATOR

// Instruction
alert(
  "EXCERCISE 2\n\nThis is a Basic Calculator Game.\n\nInput any valid number, an operator (+, -, *, /) and another number and  I will show you the Result. \n\nReady, let's go!!"
);

let firstNum = prompt("Input the first number");
let operator = prompt("Input the operator (+, -, *, /)");
let secondNum = prompt("Input the second number");

// Error Check
if (firstNum == null || operator == null || secondNum === null) {
  alert("You cancelled");
} else if (
  firstNum.trim() === "" ||
  operator.trim() === "" ||
  secondNum.trim() === ""
) {
  alert("Input(s) cannot be empty");
} else if (isNaN(firstNum) || isNaN(secondNum)) {
  alert("Invalid input");
} else if (
  operator !== "+" &&
  operator !== "-" &&
  operator !== "*" &&
  operator !== "/"
) {
  alert("Invalid operator");
} else {
  //
  let a = Number(firstNum);
  let b = Number(secondNum);

  if (operator === "+") {
    alert(`Result: ${a + b}`);
  } else if (operator === "-") {
    alert(`Result: ${a - b}`);
  } else if (operator === "*") {
    alert(`Result: ${a * b}`);
  } else if (operator === "/") {
    alert(`Result: ${b !== 0 ? a / b : "Not divisible by Zero"}`);
  }
}
