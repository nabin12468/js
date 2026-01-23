// localStorage API: setltem,getltem,removeltem,clear

//localStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga

//sessionStorage -> ye aapka data temporarily store karta hai matlab ki tab band hua aur data gaya

//cookies ->ye bhi data store karta hai and data browser ke cookies naam ki property mein save hota hai
// ye cookie concept kam data ya light data ki liya hota hai


//LocalStorage
// store kaise kare     - setItem
//data fetch kaise kare - getItem
//remove kaise kare     -removeItem
//update kaise kare     -setItem

/*
localStorage.setItem("name", "nabin");


// value nikalda

let val = localStorage.getItem("name");



//for remove anything
let val = localStorage.removeItem("name");




let val = localStorage.setItemItem("name" , "nunu");



//sessionStorage  API  -> we use this for temporary data store

 let val = sessionStorage.setItem("name", "nabin")



//cookies

// browser  mein chhota data store karne ke liye cookies ka istemaal hota hai

// cookies -> ~4kb
//localStorage sessionStorage - ~5mb

//cookies mein jo bhi data saore karoge wo data page reload par automatically sever par jaayega

document.cookie = "email=abc@gmail.com"



//JSON.stringify

localStorage.setItem("friends", JSON.stringify(["abya","nabin","parbin"]));


// localstorage mein array,object use nai kar skate isliya hamla string ma convert garxam
// we use JSON.parse for return in it's original data


let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);

*/
function setDarkOrLight(){
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add("dark");
}
else{
    document.body.classList.add("light");
}
}
setDarkOrLight();


window.matchMedia("(prefers-color-scheme: dark)").addEventListener
("change", function(){
 setDarkOrLight()
});