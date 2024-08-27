// Javascript Conditions
//------------------------------------------------------

// JavaScript conditional statements allow you to execute specific blocks of code based on conditions.
// If the condition is met, a particular block of code will run; otherwise, another block of code will execute based on the condition.

// There are several methods that can be used to perform Conditional Statements in JavaScript.


// 1) if statement	
// 2)  if else statement	
// 3) else if  ladder statement	
// 4) switch statement	
// 5) ternary operator	



// 1) IF STATMENT
//-------------------------------------------------------------

//Executes a block of code if the specified condition is true.

//SYNTAX
//--------------------------------------------------------------

if (condition) {
   // code to be executed if condition is true
  }
  
//EXAMPLE
//-----------------------------------------------------------------

let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}


// 2) IF ELSE STATMENT
//------------------------------------------------------------------

//Executes a block of code if the condition in the if statement is false.


//SYNTAX
//-------------------------------------------------------------------------

if (condition) {
      // code to be executed if condition is true
  } else {
      // code to be executed if condition is false
  }


//EXAMPLE
//---------------------------------------------------------------------------


let z = 3;
if (z > 5) {
  console.log("z is greater than 5");
} else {
  console.log("z is 5 or less");
}

// 3) ELSE IF LADDER
//-----------------------------------------------------------------------------

//specifies a new condition to test if the first condition is false.

//SYNTAX
//------------------------------------------------------------------------------

if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition2 is true
  } else {
    // code to be executed if both conditions are false
  }
  

//EXAMPLE
//-----------------------------------------------------------------------------


let Y = 7;
if (Y > 10) {
  console.log("Y is greater than 10");
} else if (Y > 5) {
  console.log("Y is greater than 5 but less than or equal to 10");
} else {
  console.log("Y is 5 or less");
}


// 4) SWITCH STATMENT
//-------------------------------------------------------------------------------

//The switch statement is used to perform different actions based on different conditions
//The swith statement used to select one of many code blocks, to be executed.

//SYNTAX
//---------------------------------------------------------------------------------

switch(expression) {
    case value1:
      // code to be executed if expression equals value1
      break;
    case value2:
      // code to be executed if expression equals value2
      break;
    default:
      // code to be executed if no case matches
  }
  

//EXAMPLE
//----------------------------------------------------------------------------------

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


// 5) TERNARY OPERATOR
//----------------------------------------------------------------------------------

//simplified conditional operator like if-else

//SYNTAX
//----------------------------------------------------------------------------------
condition? expression1:expression2
//expression1- if condition is true 
//expression2- if condition is false

//EXAMPLE
//------------------------------------------------------------------------------

let b = 5;
let result = (b > 10) ? "b is greater than 10" : "b is 10 or less";
console.log(result);

