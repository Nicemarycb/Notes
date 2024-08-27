// Javascript Loops
// -------------------------------------------------

// The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.
// Loops can be used to execute a block of code many times based on condition


// Commonly 3 types of loop are there
// -------------------------------------------------
// 1) for loop
//        loops through a block of code a number of times
// 2) while loop
//       loops through a block of code while a specified condition is true
// 3) do while loop
//          also loops through a block of code while a specified condition is true

// 1)  FOR LOOP
//--------------------------------------------------


// The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known
// The for statement creates a loop with 3 optional expressions:
// 

//SYNTAX
//-------------------------------------------------

//for (expression 1; expression 2; expression 3) {
//   code block to be executed
// }
// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.


//EXAMPLE
//----------------------------------------------------

var x=5;

for(let i=0;i<x;i++){
    console.log(i);
}

// expression 1:initilization
// expression 2:condition check
// expression 3:value Change (increment /decrement)
// expresssion 3 is excuted (every time) after the code block has been excuted

// 2)  WHILE LOOP
// ------------------------------------------------------

// The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known
// The while loop loops through a block of code as long as a specified condition is true.


//SYNTAX
//------------------------------------------------------

// while (condition) {
//  // code block to be executed
// }


//EXAMPLE
//-------------------------------------------------------


var x=1;
 while (x<=10){
    console.log(x);
    x++;
 }


// 3)   DO WHILE LOOP
//--------------------------------------------------------

//  The JavaScript do while loop iterates the elements for the infinite number of times like while loop.
//   But, code is executed at least once whether condition is true or false.


//SYNTAX
//---------------------------------------------------------

// do {
//     code block to be executed. It must executed one time
//     }
//     while (condition);


//EXAMPLE
//-----------------------------------------------------------

var x = 1;
do {
    console.log(x);
    x++;
}
while (x <= 10)








