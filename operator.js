// Operators in JavaScript

    // arithmetic operators,comparison operators,logical operators,bitwise operators,assignment operators,string operators,conditional (ternary) operators,type operators,comma operators,unary operators


    // arithmetic operators,

    /*12 = 13 //false
    12 = "12" //true
    12 === "12" //false


    */

    //unary operators

   /* typeof "hello" //string
    typeof 12 //number
    typeof true //boolean
    typeof {} //object
    typeof [] //object
    typeof undefined //undefined
    typeof null //object

    let a=13;
    ++a; //13
    a++; //14  


    //tetnary operators


12>13 ? console.log("true") : console.log("false");  
   



//practice 

 //Q)  let a=10;
let b=20;
if (a > 5 && b < 25) {
    console.log("Both conditions are true");
}
else {  
    console.log("At least one condition is false");
} 

// (Q) 
let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) {
    console.log("Access granted");
}
else {
    console.log("Access denied");
}  

(Q)  
let temp = 35;
if (!(temp < 30)) {
    console.log("It's not hot outside");
}
else {
    console.log("It's hot outside");
}

(Q) 
let a = 0;

if (a) {
    console.log("a is truthy");
}
else {
    console.log("a is falsy");
} 
//(Q)
let score = 85;
let grade = (score >= 90) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';
console.log("Grade:", grade);  


//(Q)

let  points = 10;

let status = points > 100 ? "Gold Member" : "Regular Member";

console.log("Status:", status); 

//Q

let isLoggedIn = true;
let hasToken = false;

let access = isLoggedIn && hasToken ? "Access Granted" : "Access Denied";

console.log("Access:", access);  



//(Q)
 let x = 5;
 x++;
    console.log(x); //5 


//(Q)
    let x = 5;
    let y = ++x;
    console.log(x,y);  

//(Q)
    let m = 5;
    let n = m++;
    console.log(m,n);

    

    //(Q)
    let p = 10;
    console.log(p--); //10
    console.log(p); //9


    //(Q)
    let q = 10;
    
     let result = q++ + ++q;
    console.log(result); //22
   



//(Q)

let likes = 100;

function likePost() {
    return ++likes;
}
console.log(likePost()); //101
console.log(likes)




//(Q)

let count = 3;

if(count-- ===3){
    console.log("Count is three");
}   
else {
    console.log("Count is not three");
}

*/


