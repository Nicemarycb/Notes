//Javascript Variables
//----------------------------------------------------------------------

// In JavaScript, variables are containers for storing data values.
// You can declare variables using the var, let, or const keywords, and each has different characteristics.


// Declaring Variables
// ------------------------------------------------------------------------------

//  1) VAR
// -------------------------------------------------------------------------------

// we can reassign the value;
// We can declare the the var without any value;
// we can re-declare the same var
// var has global scope(Global Scope: Even if the variable is declared inside a block, it can be accessed 
//                        from any where)
// var can be hoisted( Hoisting: Moving the declaration of variables and functions to the top of the scope before 
//                       the execution starts,)


//EXAMPLE
//-----------------------------------------------------------------------------------

var x = 10;
x = 20; // valid
var x = 30; // valid, re-declaration allowed


//2) LET
//-----------------------------------------------------------------------------------------

// We can reassign the value
// We can declare the the let without any value;
// We are not able to re-declare the let name
// let has block scope 
// let cannot be hoisted


//EXAMPLE
//---------------------------------------------------------------------------------

let y = 10;
y = 20; // valid
let y = 30; // error, cannot be re-declared in the same block


//3)CONST
//--------------------------------------------------------------------------------------

// we are not able to re-assign the value
// Throughout the pgm, the value of const is same;
// while declaring the const variable, we must assign value to it;
// const has block scope
// const cannot be hoisted

//EXAMPLE
//---------------------------------------------------------------------------------

const z = 10;
z = 20; // error, cannot be updated
const z = 30; // error, cannot be re-declared



//VARIABLE TYPES
//----------------------------------------------------------------------------------------

//JavaScript variables can store different types of data:

// NUMBERS: Represents both integer and floating-point numbers.
//-------------

// let age = 25;
// let pi = 3.14;
 
// STRING: Represents a sequence of characters.
//---------------

// let name = "John Doe";

// BOOLEAN: Represents true or false.
//--------------

// let isValid = true;

// ARRAY: Holds multiple values in a single variable.
//-------

// let numbers = [1, 2, 3, 4, 5];

// OBJECT: Stores key-value pairs.
//---------

// let person = {
//     name: "Alice",
//     age: 30,
//   };
 
  
// NULL: Represents an intentional absence of value.
//------ 
  
// let emptyValue = null;

// UNDEFINED: Indicates that a variable has been declared but not yet assigned a value.
//-----------

// let unknown;



