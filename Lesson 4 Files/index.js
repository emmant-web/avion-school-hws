//In these first 6 questions, replace `null` with the answer.

//Create a string variable. It can contain anything
const newString = "Avion";

//Create a number variable. It an be any number
const newNum = 2025;

//Create a boolean variable.
const newBool = true;

//Solve the following math problem.
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

//Solve the following math problem:
const newModulo = 21 % 5 === 1;

//In the next 22 problems you will complete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names.

function returnString(str) {
  //return the string provided: str
  return str;
}
returnString();

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const sum = x + y;
  return sum;
}
add(2, 3);

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const diff = x - y;
  return diff;
}

subtract(2, 3);

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const product = x * y;
  return product;
}
multiply(2, 3);

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const quotient = x / y;
  return quotient;
}

divide(2, 3);


function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y){
    return true;
  } 
    return false;
}

areEqual(3, 3);




function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length){
    return true;
  }

  return false;
}

areSameLength(3, 3);



function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here

  if (num < 90){
    return true;
  }

  return false
}

lessThanNinety(89);


function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here

  if (num > 50){
    return true;
  }
  return false;
}

greaterThanFifty(60);

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  const rem = x % y;
  return rem;
}

getRemainder(9, 4);



function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here

  if (num % 2 === 0){
    return true;
  }

  return false;

}
isEven(2);

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here

  if (num % 2 !== 0){
    return true;
  }

  return false;
}
isOdd(3);

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here

  const double = Math.pow(num, 2);
return double;
}

square(3);

function cube(num) {
  // cube num and return the new value
  // code here

  const triple = Math.pow(num, 3);
  return triple;
}

cube(3);

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  const raise = Math.pow(num, exponent);
  return raise;
}

raiseToPower(3, 6);


function roundNumber(num) {
  // round num and return it
  // code here
  const round = Math.round(num);
  return round;
}

roundNumber(4.55);


function roundUp(num) {
  // round num up and return it
  // code here
  const upper = Math.ceil(num)
  return upper;
}

roundUp(5.33)

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here

  const add = str + '!';
  return add;
}

addExclamationPoint('hello world');

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here

  const fullName = firstName + " " + lastName;
  return fullName;
}

combineNames('Avion', 'School');

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const greet = `Hello ${name}!`;
  return greet;
}

getGreeting('Sam');

// The next two questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
 
  const area = length * width;
  return area;
}

getRectangleArea(4, 5);


function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here

  const areaTriangle = (1 / 2) * base * height;
  return areaTriangle;
}

getTriangleArea(5, 8);





// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
