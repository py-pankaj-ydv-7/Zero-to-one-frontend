// ... spread/rest

var a = [1,2,3,4,5,6,7,8,9];
var b = a;  // ye copy nahi ye refrencing kah lati hai

var c = [...a];
// console.log(c);

// spread ka matlab hai array k saare value ko us jagah pe bikher dena .

// spread use hota hai copy ya fir us location par kisi aur ki value bikher ne liye..
// rest use hota hai jab aapko bache huye values ek variable mei daalne ho

function abcd (a,b,c,...d){
    console.log(a ,b ,c,d);
    

}

abcd(1,2,3,4,5,6,9,)