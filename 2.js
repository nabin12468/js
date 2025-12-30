//2.Data Type + Type System


//Primitive Data Types  -> aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
// number, string, boolean, null, undefined, symbol, bigInt


// reference  -> inko copy karne par real copy nahi milegi but aapko reference milega parent ka

// array, object, functions
// [] {} ()


/*  let a = 10; // number
let b=a; // copy by value
 a= a + 5;
    console.log(a); // 15  */



/*let a = [1,2,3]; // reference type
let b = a; // copy by reference
a.push(4);
console.log(a); // [1,2,3,4]
*/

// number, string, boolean, null, undefined, symbol, bigInt

// null ka matlab hai aapne jaan boojh kar koi value nahi di
// undefined ka matkab ki aapne ek variable banaaya  lekin usme koi value assign nahi ki to jo value by default milegi wo undefined hogi


//symbol  -> unique immutable value

/* let obj = {
    uid: 1,
    name: "Naveen",
    age: 24,
}
 let u1 = Symbol("uid");
  obj[u1] = 2; */




/*future mein hum koi libraries use karenge ab is case mein un  libraries
  mein kai baar kuch fields hoti  hai jinse similar hum bhi banaa dete hain
  aur galti se humaaari banaai hui fields us library ki orginal fields ko change kar deti hain */
 
  //let u1 = Symbol("id");
  //let u2 = Symbol("id");


  // bigint
  let  a= 987604836447381n;
  a =2 +a;
  console.log(a);
  





// array, object, functions


