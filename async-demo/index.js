// demonstration of blocking program -

/*

This simply means that when the first program is executing,
this is drop on the execution stack where until is finished the second program is blocked and kept waiting for it.

Thus, this is called Synchronous or blocking

console.log("Before")
console.log("After")

*/

//demonstration of non-blocking program

/*
A non-blocking or asynchronous program

*/

console.log("Before");

console.log("After");

const getUser = (id) => {
  setTimeout(() => {
    console.log("Reading database...");

    return {
      id: id,
      gitHubUsername: "Aliyu",
    };
  }, 2000); //simulating reading from database after 2 secs
};


const user = getUser(1); //the return within the setTime out will be delayed, so since the function getUser has no of it own, the results of the console will always undefined as the setTimeout will be delay for 2sec and getUser is instant.
console.log(user)

/*

Note: setTimeout() function was used to simulate reading from 
database. It is normal that reading from database usually delayed, thus, the use setTimeout() to schedule execution of a program.
*/




//Handling Async code in Node

/*

There are three patterns to deals with async code as follows:

1. Callbacks
2. Promises
3. Async/await - syntactical sugar over promises in 2

*/
