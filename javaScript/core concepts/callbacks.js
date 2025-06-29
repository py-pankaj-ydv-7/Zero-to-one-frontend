//Define a callback function
function greeting(name){
    console.log("Hello, "+ name);
}

// Define a function that takes a callback 

function processUserInput(callback){
    var name = prompt("please enter your name.");
    callback(name);
}

//call the function with the callback 

processUserInput(greeting);