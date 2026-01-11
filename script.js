//Dom manipulation
// html se element select karna
// text badlna
// html badlna
// css badlna
// attribute
// event liseners

/*
<h1 id ="abcd"></h1>
let abcd = document.getElementById("abcd");
console.log(abcd)





//<h1 class ="abcd"></h1>
//<h1 class ="abcd"></h1>
//<h1 class ="abcd"></h1>
let abcd = document.getElementsByClassName("abcd")
console.dir(abcd);




let abcd = document.querySelector("h1")  //querySelector always select first h1
console.dir("abcd")



//Text/content access

let h1 = document.querySelector("h1");
//h1.innerHTML = "nabin tu badiya ha";    //
//h1.innerText = "nabin tu badiya ha";
//h1.textContent = "nabin tu badiya ha";

//h1.innerHTML = "<i>hey</>";




//Attribute manipulation:getAttribute,setAttribute,removeAttribute

let a = document.querySelector("a");
//console.log(a);
//a.href = "https://www.google.com"
a.setAttribute("href","https://www.google.com");



// setAttribute
let img = document.querySelector("img");
img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1670275658563-450157cc6e34?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")


//getAttribute
let a = document.querySelector("a")
console.log(a.getAttribute("href"));

*/
//removeAttribute
let a = document.querySelector("a")
a.removeAttribute("href");

