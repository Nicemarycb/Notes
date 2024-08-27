// PROMISIFYING A CALL BACK FUNCTION
// -----------------------------------------


// Promisifying a callback function in JavaScript refers to the process of converting a function that uses a callback to 
// handle asynchronous operations into a function that returns a promise. This is useful because promises offer a cleaner 
// and more modern way of handling asynchronous code compared to traditional callbacks, especially when working with async/await or chaining.
// To promisify a function, you typically wrap the callback-based function inside a new function that returns a promise. 
// Inside that function, you'll call the original function and resolve or reject the promise based on the callback's results.



// Example of Promisifying a Callback:
//------------------------------------------------




function fetchFromServer(url, callback) {
  setTimeout(() => {
      if (url === 'https://api.example.com/data') {
          callback(null, 'Sample data from API Example');
      } else {
          callback('Error: Invalid URL');
      }
  }, 1000);
}
function fetchFromServerPromise(url) {
  return new Promise((resolve, reject) => {
      fetchFromServer(url, (error, data) => {
          if (error) {
              reject(error);
          } else {
              resolve(data);
          }
      });
  });
}
console.log("Starting network request...");

const promise = fetchFromServerPromise('https://api.example.com/data');

promise.then(
  function(data) {
      console.log('Received data:', data);
  },
  function(error) {
      console.error('Error:', error);
  }
);
