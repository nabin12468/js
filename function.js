// what why how

// we have code jun code lekhda bitikai chalauna hoina after call paxi chalauna ka lagi function banako ho

/**
 
function abcd(){
//function statment
}

 

let fnc = function(){
    console.log("dance")
 // function expression
}
fnc() 

// fat arrow fnc

let fnc = () =>{

    console.log("you are beautifull")

};
fnc();



function dance (v1){
 console.log(`${v1} tu kun hai`);

}
dance("ghodha")
dance("cow")
dance("dog")


function add(v1, v2){

    console.log(v1 + v2);

}
add(551,2)




//default parameters

function add(v1=0 ,v2=0)
{
  console.log(v1+v2);
}
add();

//rest

//jub arguments kai saare ho to humein utne hi parameter banaane padega ,issey bachne ke liye,hum rest ka use karte hai ... agar ... function ke parameter space mein lage to wo rest operator

function abc(a,b,c,...val) {
console.log(a,b,c,val);
}
abc(1,2,3,4,5,6);




// return = matlab jaha se aaye ho wahi daal denge

function abcd(v){
    return 12 + v ;
}





let val = abcd(13);
console.log(val)



//first class function  -> functions ko  values ki tarah treat kar sakte hai

function abcd(val)
{
  val();
}
  

abcd(function(){

console.log("hey");  this example also of high order function

})



// high order function -> wo function hota hai jo ki return kare function ya fir accept kare ek function apne parameter mein



function abcd(val)
{
  return function(){
    console.log("hey how are you")
  }
}
  

abcd()

in high order function hamla ki ta functiion nai  return garna sakxau yaa ta function lai parameter ko rupma accept garna sakxam


//pure vs impure function 

//aise function jo baahar ki value ko naa badle wo hai pure function  

let a =12;
function abcd(){
    console.log("hello");

}

function hui(){     //aise function jo baahar ki value ko badle wo hai impure function  
    a++;
}




//closures  --> ek function jo return kare ek aur function aur return hone waala function humesha use karenga parent function ka koi variable

function abcd(){
    let a = 12;
  return function(){
      console.log(a);  //function lai return garxa parent function le ani tyo parent function ko value chai return vako function ma use huna paro teslai closure vanxa.

    }
}



//lexical scoping

function A(){
  let a =12;
  function B(){
    let b=13;
    function C(){
      let c = 10;
    }
  }
}




//IIFE(immediately invoked Function Expression)

(function (){
  console.log("hey");
})();



//hoisting difference between declaratiion and expression



A();


function A(){
  console.log("hii")  //this function declaration is a hoisting 
}




A();


let A = function A(){
  console.log("hii")  //we can't do hoisting in function expression
}




//(Q) convert this function to arrow function 
let  multiply = (a,b) =>{
  return a*b;
}


//(Q)
function A(val){
console.log(val)  //here val is parameter

}
A(12)  // 12 is argument



// guess the output

function sayHi(name = "guest"){
  console.log("hi",  name);

}
sayHi();



// use rest parameter to accept any number of scores and return the total.

function A(...scores){
  let total = 0;
 scores.forEach(function (val){
  total = total +val;
 });

 return total;

 }
 console.log(A(1,2,3,4))


 
//(Q)
 function chekAge(age){
  if(age<18) return "Too young "
  return "Allowed";
  }
 
 console.log(chekAge(11))



//(Q) which one is higher order function 

[1,2,3].map(function (x) {
  return x *2;  //here map is hof
})



//(Q)

function outer(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  };
}
const counter = outer ();
counter();
counter();



//(Q) Convert this normal function into an IIFE

(function init(){
  console.log("Initilialized");

}) ();

  

// Write a BMI calculator

function bmi(weight,height){
  return weight / (height * height);

}
console.log(bmi(69,1.7).toFixed(2));

*/

// create a reusable discount calculator (HOF)

function discountCalculator(discount) {
  return function (price) {
    return price - price* (discount / 100);
  };
}
let discounter = discountCalculator(10);
console.log(discounter(200));