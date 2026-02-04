//Scope,Execution Context and closures

//variable Scope: global,block,functional

// scope - functional scope, global scope and block scope

// functional scope - function ke andar jo variable banta hai wo function ke andar hi accessible hota hai
//global scope - jo variable hum function ke bahar banate hai wo globally accessible hota hai
//block scope - {} curly braces mein hi use ho sakti ha


/*
function abcd(){
    var a =  12;
    console.log(a);
}
    */
 
// Executive context: memory creation & executive phase

// executioin content

//js sabse pahle jaise hi aapka function dekhta hai ssabse pahle js banaata hai execution context,ye ek process hai jo ki do different phases mein chalta hai, memory phase and doosre ka naam hai execution phase


// lexical scope and dynamic scope

// js - lexical scoping -> ki aap kaha par physically available ho ye poori tareeke se depend krta hai ki aap kya access kro paaoge

function abcd(){
  let a = 10;
    function xyz(){
        console.log(a);
    }  
}

//dynamic scoping -> kaha se call kr r he ho uspe depend krega ki kya value milegi

let a = 10;
function abcd(){
    console.log(a);
}
function xyz(){
    let a = 20;
    abcd();
}
xyz(); // 10

//closure definition and how variable are preserved

function abcd(){
    let a = 10;
    return function(){
        console.log(a);
    }
}
let fn = abcd();
fn(); // 10


//benifits of closure
// -private variable
// -global pollutions

//how variable are preserved in closure
