//PROMISE FUNCTIONS
//--------------------------------------------------------------------

// A Promise in JavaScript is a powerful tool for handling asynchronous operations. 
// It allows you to write cleaner, more readable code by avoiding "callback hell" (nested callbacks) 
// and providing a structured way to handle success and error cases.

// Callback Hell---also known as "pyramid of doom" or "callback spaghetti"
//                - it is a term used in javascript program to describe a situation where callback functions
//                  are nested within multiple levels of operations
//                - this result in difficulty in reading, understanding and maintanability of code
//                - if any one of the callback fn fails, the pgm block there



//A promise can be in one of three states:

// Pending:   The promise is waiting for something to finish. For example, waiting for data to load from a website.
// Fulfilled: The promise has been completed successfully. The data you were waiting for is now available.
// Rejected:  The promise has failed. Maybe there was a problem, like the server not responding.
// When you create a promise, you write some code that will eventually tell the promise whether it was successful (fulfilled) or not (rejected).


//SYNTAX
//------------------

// let promise = new Promise(function(resolve, reject){
//     //do something
// });


//EXAMPLE
//---------------------------------


// Here we have created a new promise using the Promise constructor. 
// Inside the promise, there are two functions: resolve and reject.
// If everything goes well, we call resolve and pass the result. 
// If something goes wrong, we call reject and pass an error message.


let myPromise = new Promise(function(resolve, reject) {
    // some code that takes time, like loading data
    let success = true; // change this to false to check error
  
    if (success) {
      resolve("The data has loaded successfully!");
    } else {
      reject("There was an error loading the data.");
    }
  });

  myPromise.then(function(message) {
    console.log(message);
  }).catch(function(error) {
    console.log(error);
  });

  
