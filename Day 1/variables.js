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

// Var:
var a = 5;
a = 15; // valid, reassigning the value
var a = 25; // valid, re-declaring is allowed
if (true) {
    var a = 35; // affects the outer scope
}
console.log(a); // Output: 35 (the outer variable is changed by the if block)



//2) LET
//-----------------------------------------------------------------------------------------

// We can reassign the value
// We can declare the the let without any value;
// We are not able to re-declare the let name
// let has block scope 
// let cannot be hoisted


//EXAMPLE
//---------------------------------------------------------------------------------

/ Let:
let b = 10;
b = 20; // valid, reassigning the value
// let b = 30; // error, cannot be re-declared in the same block
if (true) {
    let b = 30; // valid, this b is only within the if block
    console.log(b); // Output: 30 (this b is local to the if block)
}
console.log(b); // Output: 20 (the original b outside the block remains unchanged)


//3)CONST
//--------------------------------------------------------------------------------------

// we are not able to re-assign the value
// Throughout the pgm, the value of const is same;
// while declaring the const variable, we must assign value to it;
// const has block scope
// const cannot be hoisted

//EXAMPLE
//---------------------------------------------------------------------------------

// Const:
const c = 50;
// c = 60; // error, cannot be updated
// const c = 70; // error, cannot be re-declared
if (true) {
    const c = 80; // valid, this c is only within the if block
    console.log(c); // Output: 80 (this c is local to the if block)
}
console.log(c); // Output: 50 (the original c outside the block remains unchanged)


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


