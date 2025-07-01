let student = {
    rollno: 43,
    name:"Pankaj yadav",
    course:"Information Technology"
};

let num1 =10;
let num2 = num1;
let student2 = student;

console.log(num2);
console.log(student2);

num1 =15;
delete student.name;
console.log("after udateing value ");

console.log(num2);
console.log(student2);