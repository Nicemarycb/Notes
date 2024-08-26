// PROMISIFYING A CALL BACK FUNCTION
// -----------------------------------------


// Promisifying a callback function in JavaScript refers to the process of converting a function that uses a callback to 
// handle asynchronous operations into a function that returns a promise. This is useful because promises offer a cleaner 
// and more modern way of handling asynchronous code compared to traditional callbacks, especially when working with async/await or chaining.
// To promisify a function, you typically wrap the callback-based function inside a new function that returns a promise. 
// Inside that function, you'll call the original function and resolve or reject the promise based on the callback's results.



// Example of Promisifying a Callback:
//------------------------------------------------



function traditionalAsyncFunction(arg, callback) {
    setTimeout(() => {
      if (arg) {
        callback(null, "Success!"); // No error, operation succeeded
      } else {
        callback("Error: Invalid argument", null); // Error occurred
      }
    }, 1000);
  }