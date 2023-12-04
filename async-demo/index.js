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
// handling async code with callback


//async function 1 - with setTimeout()
const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Reading database...");

    callback({ id: id, gitHubUsername: "Aliyu" });

    return;
  }, 2000); //simulating reading from database after 2 secs
};

//async function 2 - with setTimeout()
function getRepositories(username, callback){
    setTimeout(()=>{
        console.log("Calling Github API ...")
        callback(['repo1','repo2', 'repo3'])
    }, 2000)
}

console.log("Before");
getUser(1, function (user) {
//   console.log("User", user);

  //Get the repositories
  getRepositories(user.gitHubUsername, (repos)=>{

    console.log('Repos', repos)

  })
});

console.log("After");
// const user = getUser(1); //the return within the setTime out will be delayed, so since the function getUser has no of it own, the results of the console will always undefined as the setTimeout will be delay for 2sec and getUser is instant.
// console.log(user);

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
