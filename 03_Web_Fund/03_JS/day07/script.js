//Asynchronous vs Synchronous

//! Synchronous execution - execute/run code line by line


//! Asynchronous execution - execute/run all tasks without blocking one another

let num1 = 222

setTimeout(function () {
    console.log("SetTimeout Asynch", 222)
}, 2000)