//Syntax
// isko hum iife bhi kahte hai , imideate invoke function.

// (function(){
//     //function body
// });

// //Example as a callback
// setTimeout(function(){
//     console.log("This is anonymous");
    
// },1000)

// //Assigned to a variable
 
// const add = function(a,b){
//     return a+b;
// };
// console.log(add(2,3)); // output : 5

function greeting(){
    console.log("hello i  am here.");
    
}
console.log("Before");
setTimeout(greeting,5000)
console.log("After");



console.log("Before");
setTimeout(function(){
    console.log("i am anonymous");
},3000);
console.log("After");
