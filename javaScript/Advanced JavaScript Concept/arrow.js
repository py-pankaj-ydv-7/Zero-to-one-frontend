/* normal function */

// function sum(a,b){
//     return a+b;

// }
// console.log(sum(4,5));

/* Arrow Function */
let sum = function(num1,nums2){
    return num1+nums2;
}

let sum1 = (num1, num2)=>{
    return num1+num2;
}

let sum2 = (num1,num2)=> num1 + num2;

let square = num => num*num;

console.log(sum(2,6));
console.log(sum1(2,66));
console.log(sum2(22,6));
console.log(square(4));
