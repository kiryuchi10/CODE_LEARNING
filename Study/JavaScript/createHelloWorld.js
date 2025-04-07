// createHelloWorld Outer function 
var createHelloWorld = function() {
    console.log("Hello World");
    // return innter function 
    return function(...args){ 
        // ...args : get unlimited number of parameters 
        return "Hello World";
    }
}

createHelloWorld();
