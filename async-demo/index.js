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


console.log("Before")
setTimeout(()=>{}, 2000)//simulating reading from database after 2 secs
console.log("After")

