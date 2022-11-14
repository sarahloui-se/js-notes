/* // DATA TYPES
number = 4
  - NaN = Not a Number
string = 'string'
boolean = true
undefined = undefined // absence of a value
null = null // intentional absence of an object
bigInt = // Big Integer; can represent large integers even beyond safe integer limit
symbol = // ???
*/

/* (IN)EQUALITY VS STRICT (IN)EQUALITY
== & != (in)equality attempts to convert both values to a common type
=== & !== strict (in)equality compares both data type & value as-is; doesn't convert
*/

/* ARRAYS */
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
// If you've happened to code so badly there's global & local variables w. same name, local takes precedence

// Regular format
function functionName(parameter1, parameter2) {
	return parameter1 + parameter2; // doesn't need return BUT will return undefined w/o it
}
console.log(functionName("Parameter is now ", "an argument?"));

// Queue: CompSci concept - abstract Data Structure where items kept in order ie. FIFO

// You can return result of comparison for true/false instead eg...
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
} // becomes
function isEqual(a, b) {
  return a === b;
}

// or...
function isLess(a, b) {
  /*if (a < b) {
    return true;
  } else {
    return false;
  }*/
  return a <= b;
}

/* SWITCH */
// case tested with ===
// DYK that if you have multiple inputs w. same output, you can cut down on typing?
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

/* OBJECTS */
// Are mutable - so you can update properties even if you declare w. const!
// Passed by reference - when variable assigned to obj into funct as argument, computer interprets parameter name as pointing to space in memory holding object

// Deleting properties from objects
let testObject = {
  key: 'value',
  num: 123,
  delete: true
}

delete testObject.delete; /* console.log(testObject) output: { key: 'value', num: 123 }
think about if you REALLY want to delete a property altogether or just need it blank */

/* Methods: when data stored on an object is a function (so what an object does)
console.log() = object.method()

*/
  // Longform
const testing = {
  methodName: function () { 
    console.log('This value is an anonymous function expression')
  }
};

  // Shorthand
const testing = {
  methodName() { 
    console.log('This value is an anonymous function expression')
  }
};

// Looping using for...in
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

/* this
references the calling obj, providing access to calling obj's properties. Avoid in arrow func*/
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo () {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

