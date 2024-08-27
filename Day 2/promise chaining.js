// PROMISING CHAINING
// ----------------------------


// Promise chaining in JavaScript is often used to handle multiple asynchronous operations in a sequential manner,
// ensuring that each operation finishes before the next one starts. 
// This is particularly useful when you need to perform actions that depend on the results of previous asynchronous tasks.
//In promise chaining, promises are chained together using the .then() method, ensuring that each promise is executed sequentially


// Benefits of Promise Chaining
// --------------------------------------------
// Readability:     It makes asynchronous code more readable compared to nested callbacks.
// Error Handling:  You can catch errors from any point in the chain in a single .catch() block.
// Control Flow:    It allows you to handle asynchronous operations sequentially, ensuring one operation completes before the next starts.


// How Promise Chaining Works
//---------------------------------------------------------
// Initial Promise:            Start with a promise that resolves or rejects.
// Chain Subsequent Promises:  Use .then() to define what happens when the promise is fulfilled. Inside each .then(), you can return another promise or a value.
// Error Handling:             Optionally, use .catch() at the end of the chain to handle errors if any of the promises reject.




// Example of promise chaining
//-----------------------------------------------------------


let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // Initial promise resolves to 1 after 1 second
  });
  
  p.then(function(result) {
    console.log(result); // 1
    return result * 2;   // Return 2 for the next then
  })
  .then(function(result) {
    console.log(result); // 2
    return result * 3;   // Return 6 for the next then
  })
  .then(function(result) {
    console.log(result); // 6
    // Chain can continue further if needed
  })
  .catch(function(error) {
    console.log("Error:", error);  // Handles any errors in the chain
  });