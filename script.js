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


//removeAttribute
let a = document.querySelector("a")
a.removeAttribute("href");



//Dynamic Dom manipulation createElement,appendChild,removeChild,prepend

//create element
//append/prepend karo jaha bhi element chahiyw waha

let h1 = document.createElement("h1");
h1.textContent = "hello ji kaise ho";
document.querySelector("body").prepend(h1);
console.log(h1);



//apendChild

let h1 = document.createElement("h1");
h1.textContent = "hey i am nabin and you";

document.querySelector("div").prepend(h1);



//style update via.style and classlist (add,remove,toogle)

// js se css badlna

let h1 = document.querySelector("h1");
h1.style.color = "black";
h1.style.backgroundColor = "#cab278";
h1.style.fontFamily = "Gilroy";
console.dir(h1)




let h1 = document.querySelector("h1");
console.dir(h1);
//h1.classList.add("hoho")
//h1.classList.remove("hoho")
h1.classList.toggle("hoho");



// what does getElementsByclassName return ? Is it an array?
let cl = document.getElementsByClassName("color");
console.log(cl);                    // they return html collection like array but not array





//(Q) use querySelector to select all buttons with class ".buy-now".

let buynow = document.querySelector(".buy-now");
console.log(buynow)



//(Q) T1: Select the heading of a page by ID and change its text to "Welcome to sheryians!".

let hoho = document.querySelector("#hoho");
hoho.textContent = "Welcome to Sheryians!";



// select all <li> elements and print their text using a loop.

let lis = document.querySelectorAll("li");
lis. forEach(function(val){
    console.log(val.textContent);
})

OR
let lis = document.querySelectorAll("li");
for(let i=0; i< lis.length; i++){
console.log([i], textContent);
}



//(Q) when should you use textContent instead of innerText?


//(Q) Select a paragraph and replace its content with:
/* <b>Update </b> by javaScript 

let p = document.querySelector("p");

p.innerHTML = "<b>Updated </b> by javaScript";




// how do you get the src of an image using javaScript


let img = document.querySelector('img');
//console.log(img.src);
console.log(img.getAttribute("src"));



// what does setAttribute () do?
document.querySelector("img").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwr0H12gGXUjANhVcVG0ZS_twauyyNudXaA&s")



let a = document.querySelector("a")
a.href = "https://www.sheryians.com"



//add a title attribute to a div dynamically.

let div = document.querySelector("div");

div.setAttribute("title", "some info");

*/

// Remove the disabled attribute from a button

document.querySelector("button")