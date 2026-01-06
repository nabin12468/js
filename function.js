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

*/

//first class function  -> functions ko  values ki tarah treat kar sakte hai

function abcd(val)
{
  val();
}
  

abcd(function(){

console.log("hey");

})






