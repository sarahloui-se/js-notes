// Bracket Notation to find last character of a string
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; // Output when logged: e

// ...and to find nth-to-last chara of a string
const thirdToLastLetter = lastName[lastName.length - 2]; // Output when logged: c

// Multidimensional arrays (aka array of arrays) referencing
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3]; // Output when logged: [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; // Output when logged: [10, 11, 12]
const element = arr[3][0][1]; // Output when logged: 11

// array.push()
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
	/* why can I push into myArray despite being const variable?*/
	
/* FUNCTIONS */
// If you've happened to code so badly that you have global & local variables w. same name, local takes precedence

// Regular format
function functionName(parameter1, parameter2) {
	return parameter1 + parameter2;
}
console.log(functionName("Parameter is now ", "an argument?"));