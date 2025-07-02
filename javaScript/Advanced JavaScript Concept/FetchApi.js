fetch('https://jsonplaceeholder.typicode.com/posts')
.then(Response =>{
    if(!Response.ok){
        throw new Error('Network response was not ok ' + Response.statusText);
    }
    return Response.json();
})
.then(data => console.log(data))
.catch(error => console.log(error));
