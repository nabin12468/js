// Scope and closure ,HOF

//global -> Accessible to everyone
//functional -> Accessible  only to that function
//Block level scope  -> Accessible  only to that Block
/*
let a = 10;
const b = 20;
var e = 90;

if(true)
{
    console.log(b)
    var e=90;
}
console.log(e);

*/


function greet(){
    let c=30;
    var e=90;
}
console.log(e)   // in functio we can't access var from outside the function block
greet();