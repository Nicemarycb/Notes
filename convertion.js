// CONVERTING .THEN TO ASYNC/AWAIT AND VICE VERSA
//-------------------------------------------------------

//JavaScript, both .then() and async/await are used to handle promises and asynchronous operations. 
//Converting between these two approaches allows developers to adapt code to different styles or preferences.


// Converting .then() to async/await
//----------------------------------------------------------
// The .then() method chains promise resolutions, while async/await allows you to write asynchronous code 
// in a more synchronous style using await inside an async function.

// Example with .then():
//-----------------------------------------------------

fetchData()
  .then(data => processData(data))
  .then(result => {
    console.log('Processed result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });



//   Conversion to async/await:
//-------------------------------------------------------------
// Declare an async function:
//               Since await can only be used inside an async function, we wrap the code inside an async function.
// Use await:                  
//               Replace each .then() call with an await statement to wait for the promise to resolve.
// Error Handling with try/catch: 
//               Use a try/catch block to handle any errors, replacing the .catch() method.


async function fetchDataAndProcess() {
    try {
      const data = await fetchData();
      const result = await processData(data);
      console.log('Processed result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  fetchDataAndProcess();



// Converting async/await to .then()
//-----------------------------------------------------------

// To convert async/await back to .then():

// Replace await with .then():  Each await call will be replaced by a .then() chain.
// Handle errors with .catch(): Replace the try/catch block with a .catch() method at the end of the promise chain.

// Example with async/await:
//------------------------------------------------------------


async function fetchDataAndProcess() {
    try {
      const data = await fetchData();
      const result = await processData(data);
      console.log('Processed result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  fetchDataAndProcess();

  
// Conversion to .then():
//------------------------------------------------------------


fetchData()
  .then(data => processData(data))
  .then(result => {
    console.log('Processed result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });