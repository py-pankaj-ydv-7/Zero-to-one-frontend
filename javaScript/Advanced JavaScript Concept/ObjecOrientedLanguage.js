let Student = {
    rollNo: 43,
    name: "Pankaj Yadav",
    course: "computer Science"
};


// Dot Notation

console.log(Student);
console.log(Student.course);
console.log(Student.rollNo);
console.log(Student.name);


// Brackit Notation


console.log("******  Brackit Notaion ******** ");

console.log(Student["course"]);
console.log(Student["name"]);
console.log(Student["rollNo"]);


// Delete
console.log(" *********** delete **************");

delete Student.course;
console.log(Student);
