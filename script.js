// Task 1
// Objectivie: Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

// Create a function that called await call
async function awaitCall() {
  // stimulate data fetching using the globally available fetch method
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  //   log the data from the api
  console.log(data);
}
// invoke the awaitCall function
awaitCall();

// Task 2
//  Objective: Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

// modified to handle errors properly
async function awaitCallModified() {
  try {
    // stimulate data fetching using the globally available fetch method
    const response = await fetch("https://jsonplaceholder.typicode");

    const data = await response.json();
    //   log the data from the api
    console.log(data);
  } catch (error) {
    // handle any error that might occur from the try block above
    console.log(error);
    console.log("Sorry an error has ocurred here");
  }
}
// invoke the awaitCall function
// awaitCallModified();

// Task 3
// Objective: Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

// getPosts

async function getPosts() {
  try {
    // stimulate data fetching using the globally available fetch method
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    //   log the data from the api
    console.log(data);
  } catch (error) {
    // handle any error that might occur from the try block above
    console.log(error);
    console.log("Sorry an error has ocurred here");
  }
}

// getTodos
async function getTodos() {
  try {
    // stimulate data fetching using the globally available fetch method
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();
    //   log the data from the api
    console.log(data);
  } catch (error) {
    // handle any error that might occur from the try block above
    console.log(error);
    console.log("Sorry an error has ocurred here");
  }
}

// using promise.all to chain both async function together
async function ConcurrentRequest() {
  return await Promise.all([getPosts(), getTodos()]);
}
ConcurrentRequest();
