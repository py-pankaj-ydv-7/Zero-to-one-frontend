// Creating a Promise

let Promise = new Promise((resolve, reject) =>{
    // Asynchromous operation
    if(result()){
        resolve('Success');
    } else {
        reject("Error")
    }
});

// Handling a Promise: handle value
Promise.then(value => {
    console.log(value); // 'success'
    
});

//Handling a Promise: handle rejection

Promise.catch(error => {
    console.error(error); // 'Error'
});

/* Handling a promise: Executes a block of code regardless of the promise's outcome. */
Promise.finallu(()=>{
    console.log('operation completec');
    
});