/** @format */

// EXCERCISE 5: MULTIPLICATION TABLE CALCULATOR
// Instruction
alert(
  "EXCERCISE 5\n\nThis Can Generate the Multiplication Table from 1-12 for any number you enter.\n\nWanna Try? \n\nLet's Go!!!"
);

let multiplyNum = prompt("Input any numer of your choice");

if (multiplyNum === null) {
  alert("You cancelled");
} else if (multiplyNum === "") {
  alert("Input cannot be empty");
} else if (isNaN(multiplyNum)) {
  alert("Invalid input");
} else {
  let multiplyTable = Number(multiplyNum);
  console.log(`MULTIPLICATION TABLE OF ${multiplyTable}\n`);
  let table;
  for (let index = 1; index <= 12; index++) {
    table = `${multiplyTable} x ${index} = ${multiplyTable * index}\n`;
    console.log(table);
  }
}
