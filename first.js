// design pattern 
// module pattern
 // module pattern ek design pattern hai jisme hum apne code ek self executing function ke andar likhte hain,taki variable aur functions private rahen.

 // iske andar se hum sirf wahi cheeze bahar return karte hain jo humein chahiye hoti hain.

 //Is psttern ka main fayda hai data hiding (encapsulation) aur clean structure,taaki code secure,reusable aur manageable ban sake.

  
 
 /*var a = 12; // var use for declare and value put for initialize
 a = 13; // reassign value

 var b = 14;  // redeclar
 console.log(b);     
 

 this is a problem so that fix by let
 
 */

 //Temporal Dead Zone (TDZ)
   //let and const ke sath hum TDZ ka samna karte hain,jo ek aisa period hota hai jisme variable declare to ho chuka hota hai lekin uska initialization nahi hua hota.

   console.log(x); // ReferenceError: Cannot access 'x' before initialization
   let x = 10;