// PROMISE ALL
// -----------------------------------------


// Promise.all() in JavaScript is a method that allows you to execute multiple asynchronous operations in parallel and wait for all of them to complete. 
// It takes an array (or iterable) of promises and returns a single promise that resolves when all the input promises have resolved, 
// or rejects if any of the input promises reject.


// How Promise.all() Works:
//-----------------------------------------
// Input:  An array (or iterable) of promises.
// Output: A single promise that:
//         Resolves with an array of results when all input promises resolve.
//         Rejects with the reason of the first promise that rejects.


//Syntax
//------------------------------------
// Promise.all([promise1, promise2, promise3])
//   .then(resultArray => {
//     // All promises have resolved
//   })
//   .catch(error => {
//     // At least one promise rejected
//   });



//Example
//--------------------------------------------------
  
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 failed'), 1500));

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // ['Promise 1', 'Promise 2']
  })
  .catch((error) => {
    console.error(error);
  });

// Example with rejection:
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Will not run because promise3 fails
  })
  .catch((error) => {
    console.error(error); // 'Promise 3 failed'
  })
