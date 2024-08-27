// CONVERTING .THEN TO ASYNC/AWAIT AND VICE VERSA
//-------------------------------------------------------

//JavaScript, both .then() and async/await are used to handle promises and asynchronous operations. 
//Converting between these two approaches allows developers to adapt code to different styles or preferences.



function simulateApiCall(endpoint, delay, response) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (endpoint) {
              resolve(response);
          } else {
              reject('Error: Endpoint is missing');
          }
      }, delay);
  });
}
//.then 
//----------------
simulateApiCall('https://api.example.org/data', 1500, 'Data from Example API')
  .then(response => {
      console.log('Received response:', response);
      return simulateApiCall('https://api.example.org/other', 800, 'Additional Data from Example API');
  })
  .then(additionalResponse => {
      console.log('Received additional response:', additionalResponse);
  })
  .catch(error => {
      console.error('Error occurred:', error);
  });
//.then to async/await
//------------------------

async function fetchApiData() {
  try {
      const response = await simulateApiCall('https://api.example.org/data', 1500, 'Data from Example API');
      console.log('Received response:', response);
      
      const additionalResponse = await simulateApiCall('https://api.example.org/other', 800, 'Additional Data from Example API');
      console.log('Received additional response:', additionalResponse);
  } catch (error) {
      console.error('Error occurred:', error);
  }
}

fetchApiData();

// async await to .then
//----------------------------------
function fetchApiData() {
  simulateApiCall('https://api.example.org/data', 1500, 'Data from Example API')
      .then(response => {
          console.log('Received response:', response);
          return simulateApiCall('https://api.example.org/other', 800, 'Additional Data from Example API');
      })
      .then(additionalResponse => {
          console.log('Received additional response:', additionalResponse);
      })
      .catch(error => {
          console.error('Error occurred:', error);
      });
}

fetchApiData();